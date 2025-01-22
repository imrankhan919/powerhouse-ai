import axios from "axios";

const API_URL = "/api/plan";

const fetchPlans = async (uid, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/${uid}`, options);
  return response.data;
};

const addPlan = async (formData, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, formData, options);
  return response.data;
};

const planService = { fetchPlans, addPlan };

export default planService;
