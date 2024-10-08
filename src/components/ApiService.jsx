import axios from 'axios';

const API_URL = 'https://kambuzuma-vanlife-backend-production.up.railway.app'; // Backend URL

const ApiService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, { email, password }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else if (error.request) {
        throw new Error('No response received from the server. Please try again.');
      } else {
        throw new Error('Error setting up the request. Please try again.');
      }
    }
  },

  signup: async (Name, userName, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/users`, { Name, userName, email, password }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else if (error.request) {
        throw new Error('No response received from the server. Please try again.');
      } else {
        throw new Error('Error setting up the request. Please try again.');
      }
    }
  },

 
};

export default ApiService;