import { User } from "../models/User";

export class AuthRepository {
  async createUser(user: any) {
    return await User.create(user);
  }

  async findUserByUsername(username: String) {
    return await User.findOne({ username: username });
  }

  async comparePasswords(inputPassword: string, storedPassword: string) {
    const bcrypt = require("bcryptjs");
    console.log("inputPassword", inputPassword);
    console.log("storedPassword", storedPassword);
    return await bcrypt.compare(inputPassword, storedPassword);
  }
}
