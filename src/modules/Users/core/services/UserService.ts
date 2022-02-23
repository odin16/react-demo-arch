import { User, UserRepository } from '../domain';

export class UserService {
  constructor(private userRepo: UserRepository) {}

  async getUsers(): Promise<User[]> {
    return this.userRepo.getUsers();
  }

  // createUser
  // changePassword
  // etc...
}
