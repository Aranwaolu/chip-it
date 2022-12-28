import axios from "axios";

export const login = (email, password) => {
  return axios.post(
    "https://chip-it-api.fly.dev/login",
    { email, password },
    { headers: {} }
  );
};

export const register = (name, email, password) => {
  console.log(name, email, password);
  return axios.post(
    "https://chip-it-api.fly.dev/signup",
    {
      name,
      email: email,
      password: password,
    },
    { headers: {} }
  );
};
