import { json } from "body-parser";
import { AuthRepository } from "../repositories/AuthRepository";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async register(user: any) {
    return await this.authRepository.createUser(user);
  }

  async login(username: string, password: string) {
    const user = await this.authRepository.findUserByUsername(username);
    console.log("usuario", user);
    if (
      !user ||
      !(await this.authRepository.comparePasswords(password, user.password))
    ) {
      throw new Error("Invalid credentials");
    } else {
      const token = jwt.sign(
        { userId: user._id },
        process.env.API_KEY || "secretkey"
      );
      return { token };
    }
  }
}
