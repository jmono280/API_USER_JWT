import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user: any) {
    return await this.userRepository.create(user);
  }

  async getUserById(userId: string) {
    return await this.userRepository.findById(userId);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }
}
