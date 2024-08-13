import { User } from "../models/User";

export class UserRepository {
  async create(user: any) {
    return await User.create(user);
  }

  async findById(userId: string) {
    return await User.findById(userId);
  }

  async findAll() {
    return await User.find();
  }
}
