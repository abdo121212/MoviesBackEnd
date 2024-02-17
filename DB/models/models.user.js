import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: { type: String, max: 20, min: 3, required: true },
  last_name: { type: String, max: 20, min: 3, required: true },
  age: { type: Number, max: 100, min: 10, required: true },
  email: { type: String, required: true },
  password: { type: String, min: 8, required: true },
  phone:  Number ,
  gender: { type: String, enum: ["male", "female"] },
  status: { type: String, enum: ["online", "offline"], default: "offline" },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

export const User = model("User", userSchema);
