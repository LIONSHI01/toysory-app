import axios from "axios";

export const registerUser = async ({ email, password }) => {
  console.log(email, password);
  try {
    const res = await axios({
      url: "http://localhost:3000/api/auth/signup",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: {
        email,
        password,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
