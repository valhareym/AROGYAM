from flask import Flask, request, jsonify
from flask_swagger_ui import get_swaggerui_blueprint
import os
import openai
import pymysql

# ... (Your existing code) ...
# Create a Flask app
app = Flask(__name__)

# Set your OpenAI API key
os.environ["OPENAI_API_KEY"] = ""

# MySQL database configuration
host = "brv4cveuxczuowlqcmu4-mysql.services.clever-cloud.com"
database_name = "brv4cveuxczuowlqcmu4"
user = "ugfyvb8dgrx9uox7"
port = 3306
password = "132qS8lEtZx2b5FlEl2K"
TABLE_NAME='docs'

# Connect to the MySQL database
connection = pymysql.connect(
    host=host,
    user=user,
    password=password,
    database=database_name,
    port=port
)

cursor = connection.cursor()

class CustomChain:
    def __init__(self, openai_api_key):
        self.openai_api_key = openai_api_key
        openai.api_key = openai_api_key

    def format_context(self, search_results, columns):
        context = "\n".join([f"Doctor {doc[columns.index('ID')]}: Name: {doc[columns.index('Name')]},"
                             f" Specialization: {doc[columns.index('Specialization')]},"
                             f" Availability: {doc[columns.index('Availability')]},"
                             f" Timings: {doc[columns.index('Timings')]}"
                             for doc in search_results])
        return context

    def get_response(self, query, context, search_results=None, columns=None):
        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"Symptoms: {query}"}
        ]

        # Add context message
        if context:
            messages.append({"role": "assistant", "content": context})

        # Get a response from GPT-3.5-turbo
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=150  # Adjust as needed
        )
        response_text = response['choices'][0]['message']['content'].strip()

        # If search results are available, append details of doctors to the response
        if search_results:
            doctor_details = "\nHere are some doctors you might consider:\n"
            doctor_details += self.format_context(search_results, columns)
            response_text += doctor_details

        return response_text
    # (Your CustomChain class code here, as defined in your previous code)

def get_specialization(query):
    try:
        # Ask GPT-3.5-turbo to guess the specialization needed based on the described symptoms
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system",
                 "content": "You are a specialization guesser. Your job is to identify the most appropriate medical specialization based on the symptoms described. Your answer should be a single word representing the specialization. Example; User: I have toothache,your response:Dentist,User : I have ear pain,Your response: ENT specialist "},
                {"role": "user", "content": f"Symptoms: {query}"},
            ],
            max_tokens=5  # Limit the number of tokens to encourage a brief response
        )
        specialization = response.choices[0].message['content'].strip()
        return specialization
    except Exception as e:
        print(f"Error while querying GPT-3 for specialization: {e}")
        return None

# Instantiate the custom chain
chain = CustomChain(openai_api_key=os.environ["OPENAI_API_KEY"])
def get_doctors_by_specialization(specialization):
    try:
        # Search the database for doctors with the specialization who are available
        cursor.execute(f"SELECT * FROM {TABLE_NAME} WHERE Specialization LIKE %s AND Availability = 'Available'",
                       ('%' + specialization + '%',))
        search_results = cursor.fetchall()
        return search_results
    except Exception as e:
        print(f"Error while querying MySQL: {e}")
        return []

@app.route('/get_specialization', methods=['POST'])
def get_specialization_api():
    data = request.json
    symptoms = data.get('symptoms', '')

    if not symptoms:
        return jsonify({'error': 'Symptoms field is required'}), 400

    # Get the specialization based on the user's symptoms
    specialization = get_specialization(symptoms)

    if specialization is None:
        return jsonify({'error': 'Could not determine specialization'}), 500

    return jsonify({'specialization': specialization})

@app.route('/get_doctors', methods=['POST'])
def get_doctors_by_specialization_api():
    data = request.json
    specialization = data.get('specialization', '')

    if not specialization:
        return jsonify({'error': 'Specialization field is required'}), 400

    # Search the database for doctors with the specialization who are available
    search_results = get_doctors_by_specialization(specialization)

    if not search_results:
        return jsonify({'message': f"No available doctors with specialization in {specialization}"}), 404

    # Extract relevant columns for response
    columns = ["ID", "Name", "Specialization", "Availability", "Timings"]
    doctor_details = []

    for doc in search_results:
        doctor_details.append({columns[i]: doc[i] for i in range(len(columns))})

    return jsonify({'doctors': doctor_details})

# Define the Swagger UI configuration
SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'  # This URL should point to your Swagger JSON file

# Create a Swagger UI blueprint
swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "MEDAPI"
    }
)

# Register the Swagger UI blueprint with your app
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)

# ... (Your existing code) ...

if __name__ == '__main__':
    app.run(debug=True)
