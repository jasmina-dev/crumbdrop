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

export const fetchLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/lboard`);
    console.log('API response:', response); // Log the entire response
    return response.data; // Assuming the data you need is in response.data
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error; // Ensure the error is thrown to be caught by the calling function
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
