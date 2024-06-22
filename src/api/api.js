import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const insertData = async (data) => {
  try {
    await axios.post(`${API_URL}/api/posts`, data);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};

export const updateData = async (data) => {
  try {
    await axios.put(`${API_URL}/api/posts`, data);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};
