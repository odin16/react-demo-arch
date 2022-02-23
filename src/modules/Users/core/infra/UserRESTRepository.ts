import { User, UserRepository } from '../domain';
import { UserDTO } from './types';

export class UserRESTRepository implements UserRepository {
  jsonUrl = 'https://jsonplaceholder.typicode.com/users';

  async getUsers(): Promise<User[]> {
    const res = await fetch(this.jsonUrl);
    const jsonData = await res.json();

    // return jsonData.map((x: UserDTO) => new User(x.id, x.name));
    return jsonData.map((x: UserDTO) => ({ id: x.id, name: x.name }));
  }
}
