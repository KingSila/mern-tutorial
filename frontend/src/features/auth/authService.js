import axios from "axios";

const API_URL = "/api/users/";

//Register a user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.SetItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
