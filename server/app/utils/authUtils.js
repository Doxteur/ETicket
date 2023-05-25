import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { registerToken } from "../Controllers/AuthController";
dotenv.config();
const config = process.env;



export async function signToken(user) {
  const token = jwt.sign({ id: user.id }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: 86400, // 24 hours
  });
  await registerToken(user.id, token);
  return token;
};
