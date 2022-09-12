import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: "string",
    require: [true, "Email is required for User."],
    unique: true,
    trim: true,
  },
  password: {
    type: "string",
    require: [true, "Password is required for User."],
    trim: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
