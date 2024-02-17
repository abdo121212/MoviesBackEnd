import { asyncHandler } from "./../../../utils/catchError.js";
import { User } from "../../../DB/models/models.user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Token } from "./../../../DB/models/models.token.js";
export const register = asyncHandler(async (req, res, next) => {
  // data
  const { first_name, last_name, age, email, password } = req.body;
  // check email
  const isEmail = await User.findOne({ email });
  if (isEmail) return next(new Error("Email already existed"));

  const hashPass = bcrypt.hashSync(password, 8);

  const user = await User.create({
    first_name,
    last_name,
    age,
    email,
    password: hashPass,
  });

  return res.json({ success: true, message: "Tmam", response: user });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // check email
  const user = await User.findOne({ email });
  if (!user) return next(new Error("Email Not Found"));

  const match = bcrypt.compareSync(password, user.password);

  if (!match) return next(new Error("Invalid Password"));

  const token = jwt.sign(
    { email: user.email, user: user._id },
    "secretorPrivatekey"
  );

  await Token.create({
    token,
    user: user._id,
    agent: req.headers["user_agent"],
  });

  return res.json({ success: true, message: "Tmam", token });
});
