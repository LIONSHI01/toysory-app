import axios from "axios";

export const registerUser = async ({ email, password }) => {
  const res = await axios({
    url: "http://localhost:3000/api/auth/signup",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email,
      password,
    },
  });

  const data = await res.json();
  console.log(data);
};
