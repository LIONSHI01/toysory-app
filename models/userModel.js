import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: "string",
    unique: [true, "Email is required to create user."],
    trim: true,
    require: true,
  },
  password: {
    type: "string",
    unique: [true, "Password is required to create user."],
    trim: true,
    require: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
