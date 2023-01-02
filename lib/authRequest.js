import axios from "axios";

export const registerUser = async ({ email, password }) => {
  try {
    const res = await axios({
      url: "/api/auth/signup",
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
