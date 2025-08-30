import { UserModel } from "../models/UserModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ status: false });

    const decoded = jwt.verify(token, process.env.TOKEN_KEY); // ✅ sync verify
    const user = await UserModel.findById(decoded.id);

    if (user) {
      return res.json({ status: true, user: user.username });
    } else {
      return res.json({ status: false });
    }
  } catch (err) {
    return res.json({ status: false });
  }
};