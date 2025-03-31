import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Extend the Request interface to include the user property
declare module "express-serve-static-core" {
  interface Request {
    user?: { _id: string; username: string } | null;
  }
}

interface TokenPayload {
  _id: string;
  username: string;
}

import UserModel from "../models/User";

const user = await UserModel.findOne({ username: "example" }).exec();

if (user) {
  const isPasswordCorrect = await user.isCorrectPassword("password123");
  console.log(isPasswordCorrect);
}

// Ensure the imported authenticateToken is used instead of redeclaring it


// Sign JWT token
export function signToken(user: TokenPayload): string {
  const secret = process.env.JWT_SECRET as string;
  if (!secret) {
    throw new Error("Missing JWT_SECRET in environment variables");
  }

  return jwt.sign(user, secret, { expiresIn: "2h" });
}

// Authentication middleware for Express
const authMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    req.user = null;
    return next();
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
    req.user = decoded; // Attach user data to request
  } catch (err) {
    req.user = null;
  }

  return next();
};

export default authMiddleware;
