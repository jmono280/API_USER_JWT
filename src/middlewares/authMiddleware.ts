import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: any;
}

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).send("Access denied");
  try {
    const decoded = jwt.verify(token, process.env.API_KEY || "secretkey");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
