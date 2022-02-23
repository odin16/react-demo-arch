import { User } from './User';

export interface UserRepository {
  getUsers(): Promise<User[]>;
}
