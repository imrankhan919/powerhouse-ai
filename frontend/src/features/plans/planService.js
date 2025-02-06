import axios from "axios";

const API_URL = "/api/plan";

// Fetch All Plans
const fetchPlans = async (uid, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/${uid}`, options);
  return response.data;
};

// Fetch Single Plans
const fetchPlan = async (pid, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/view/${pid}`, options);
  console.log(response.data);
  return response.data;
};

// Create Plan
const addPlan = async (formData, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, formData, options);
  return response.data;
};

const planService = { fetchPlans, addPlan, fetchPlan };

export default planService;
