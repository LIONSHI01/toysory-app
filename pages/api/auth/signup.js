import { connectMongo } from "../../../lib/db";
import User from "../../../models/userModel";
import { hashPassword } from "../../../lib/hashPassword";

const handler = async (req, res) => {
  if (req.method !== "POST") return;

  try {
    const { email, password, favorites } = req.body;

    // CONNECT MONGO
    await connectMongo();

    // CHECK IF USER EXIST ALREADY
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        status: "fail",
        message: "User already exist, please use another email.",
      });

      return;
    }

    // CREATE NEW USER
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      favorites,
    });
    res.status(201).json({
      message: "success",
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export default handler;
