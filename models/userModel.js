import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    require: [true, "Email is required for User."],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    require: [true, "Password is required for User."],
    trim: true,
  },
  favorites: [{}],
});

const User = models.User || model("User", userSchema);

export default User;
