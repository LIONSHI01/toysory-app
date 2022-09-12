import axios from "axios";

export const registerUser = async ({ email, password }) => {
  console.log(email, password);
  try {
    const res = await axios({
      url: "http://localhost:3000/api/auth/signup",
      method: "POST",
      data: {
        email,
        password,
      },
    });
    if (res.status === 201) {
      window.location.assign("/");
    }
  } catch (error) {
    console.log(error);
  }
};

// export const createUser = async (email, password) => {
//   const response = await fetch("http://localhost:3000/api/auth/signup", {
//     method: "POST",
//     body: JSON.stringify({ email, password }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.message || "Something went wrong!");
//   }

//   return data;
// };
