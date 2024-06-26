import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are mandatory"));
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.json("Sign up successful");
  } catch (err) {
    next(err);
  }
};
