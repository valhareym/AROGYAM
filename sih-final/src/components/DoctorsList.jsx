import React, { useState, useEffect } from 'react';
import { fetchDoctors } from './apiService';

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Doctors List</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>{doctor.Name}</li>  // Corrected line
        ))}
      </ul>
    </div>
  );
}

export default DoctorsList;
