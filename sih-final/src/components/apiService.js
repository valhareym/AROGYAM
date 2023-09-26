const API_URL = 'http://localhost:3001';

export const fetchDoctors = async () => {
  try {
    const response = await fetch(`${API_URL}/doctors`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const fetchHospitals = async () => {
  try {
    const response = await fetch(`${API_URL}/hospitals`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const fetchHospitalDetails = async (hospitalId) => {
  try {
    const response = await fetch(`${API_URL}/hospitals/${hospitalId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const fetchDoctorsByHospital = async (hospitalId) => {
  try {
    const response = await fetch(`${API_URL}/hospitals/${hospitalId}/doctors`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
