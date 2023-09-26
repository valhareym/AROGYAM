import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { BsChatRightTextFill } from 'react-icons/bs';

const Home = () => {
  const navigate = useNavigate();
  
  // State for hospitals, loading, error, and search query
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const apiEndpoint = 'http://localhost:3001/hospitals';

    async function fetchData() {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Convert the array of strings to an array of objects with name property
        const formattedData = data.map((name, index) => ({ id: index + 1, name }));
        setHospitals(formattedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  
  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigateToChat = () => {
    navigate('/chat');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {/* ... rest of the component */}
      <div className='border border-solid border-black w-full mt-5 h-[50vh] overflow-auto rounded-sm px-4 py-2'>
        {filteredHospitals.map(function(hospital) {
          return (
            <React.Fragment key={hospital.id}>
              <Link to={'/hospital/' + hospital.id}>
                <div className='text-xs lg:text-base cursor-pointer px-4 py-1 border-gray-700 flex items-center w-full lg:w-4/5 justify-between my-2 hover:bg-gray-200 rounded-sm'>
                  <h1>{hospital.name}</h1>
                  {/* Displaying a placeholder address since the API does not provide it */}
                  <h1>Address: Not Available</h1>
                </div>
              </Link>
              <hr/>
            </React.Fragment>
          )
        })}
      </div>
      {/* ... rest of the component */}
    </>
  );
};

export default Home;
