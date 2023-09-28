import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { VscTriangleRight } from 'react-icons/vsc';
import { Link, useParams } from 'react-router-dom';

const HospitalDetails = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const hospitalApiEndpoint = `http://localhost:3001/hospitals/${id}`;
    const doctorsApiEndpoint = `http://localhost:3001/hospitals/${id}/doctors`;

    async function fetchData() {
      try {
        const hospitalResponse = await fetch(hospitalApiEndpoint);
        if (!hospitalResponse.ok) {
          throw new Error(`HTTP error! Status: ${hospitalResponse.status}`);
        }
        const hospitalData = await hospitalResponse.json();
        setHospital(hospitalData);

        const doctorsResponse = await fetch(doctorsApiEndpoint);
        if (!doctorsResponse.ok) {
          throw new Error(`HTTP error! Status: ${doctorsResponse.status}`);
        }
        const doctorsData = await doctorsResponse.json();
        setDoctors(doctorsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const filteredDoctors = doctors.filter(doctor =>
    doctor.Name ? doctor.Name.toLowerCase().includes(searchQuery.toLowerCase()) : false
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-start w-full lg:w-2/5 lg:h-[80vh] h-[60vh] gap-2 justify-center mx-10 '>
          <h1 className='font-bold mt-12 lg:mt-0 text-xl lg:text-2xl'>{hospital.name}</h1>
          <h1 className='font-semibold text-sm lg:text-md'>{hospital.Address}</h1>
          <div className='flex mt-4 items-center rounded-sm border border-solid border-black w-full px-4  '>
            <i><AiOutlineSearch size={'18'}/></i>
            <input
              type="text"
              placeholder='Search for Doctors'
              className='w-full py-2 px-4 border-none outline-none'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className='border border-solid border-black w-full mt-5 h-[50vh] overflow-auto rounded-sm px-4 py-2'>
            {filteredDoctors.map(function(doctor) {
              return (
                <React.Fragment key={doctor.ID}>
                  <Link
                    to={{pathname: '/booked', state: { doctor }}}
                    onClick={() => console.log("Navigating with doctor:", doctor)}
                  >
                    <div className='text-xs lg:text-base cursor-pointer px-4 py-1 border-gray-700 flex items-center w-full lg:w-4/5 justify-between my-2 hover:bg-gray-200 rounded-sm'>
                      <h1>{doctor.Name}</h1>
                      <h1>{doctor.Specialization}</h1>
                      <VscTriangleRight size={'18'}/>
                    </div>
                  </Link>
                  <hr/>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalDetails;
