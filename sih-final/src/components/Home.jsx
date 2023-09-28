import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { BsChatRightTextFill } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import * as apiServices from './apiService';

const Home = () => {
  const navigate = useNavigate();

  // State for hospitals, loading, error, and search query
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiServices.fetchHospitals();
        const formattedData = data.map((name, index) => ({ id: index + 1, name }));
        setHospitals(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigateToChat = () => {
    navigate('/chat');
  };

  const navigateToNotifications = () => {
    navigate('/notifications'); // Replace '/notifications' with the actual route for notifications
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-start w-full lg:w-2/5 lg:h-[80vh] h-[60vh] gap-2 justify-center mx-10">
          <h1 className="font-bold mt-12 lg:mt-0 text-xl lg:text-2xl">Hello User</h1>
          <div className="flex items-center rounded-sm border border-solid border-black w-full px-4">
            <i>
              <AiOutlineSearch size={'18'} />
            </i>
            <input
              type="text"
              placeholder="Search for Hospitals"
              className="w-full py-2 px-4 border-none outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="border border-solid border-gray-700 bg-gray-200 rounded-sm px-5 py-1 mt-1 text-xs">
            Search for Hospitals to Book an Appointment
          </div>

          <div className="border border-solid border-black w-full mt-5 h-[50vh] overflow-auto rounded-sm px-4 py-2">
            {filteredHospitals.map(function (hospital) {
              return (
                <React.Fragment key={hospital.id}>
                  <Link to={'/hospital/' + hospital.id}>
                    <div className="text-xs lg:text-base cursor-pointer px-4 py-1 border-gray-700 flex items-center w-full lg:w-4/5 justify-between my-2 hover:bg-gray-200 rounded-sm">
                      <h1>{hospital.name}</h1>
                      <h1>Address: Not Available</h1>
                    </div>
                  </Link>
                  <hr />
                </React.Fragment>
              );
            })}
          </div>

          <div className="flex justify-between w-full mt-4">
            <button
              onClick={navigateToNotifications}
              className="border border-gray-700 bg-gray-200 text-black p-4 rounded-full text-2xl hover:bg-gray-100 shadow-md"
            >
              <FaBell />
            </button>

            <button
              onClick={navigateToChat}
              className="border border-gray-700 bg-gray-200 text-black p-4 rounded-full text-2xl hover:bg-gray-100 shadow-md"
            >
              <BsChatRightTextFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;