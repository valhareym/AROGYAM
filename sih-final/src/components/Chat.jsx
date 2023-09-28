import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [symptoms, setSymptoms] = useState('');
  const [careInfo, setCareInfo] = useState('');

  const handleSubmit = () => {
    // You can replace this logic with the code to fetch care information based on symptoms
    // For this example, we're using a simple placeholder message
    const placeholderMessage = `Advisable care for ${symptoms}`;
    setCareInfo(placeholderMessage);
  };

  return (
    <div className="container">
      <div className="content">
        <h2>TEXT WITH OUR BOT</h2>
        <input
          type="text"
          placeholder="Try entering your symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className="input-box"
        />
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
        <h2>CARE</h2>
        {careInfo && <textarea
          id="outputCare"
          readOnly
          value={careInfo}
          className="output-box"
        ></textarea>}
      </div>
    </div>
  );
};

export default Chat;