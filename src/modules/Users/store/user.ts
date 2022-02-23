import { makeObservable, observable, runInAction } from 'mobx';
import { User, UserRESTRepository, UserService } from '../core';

export class UserStore {
  private userService: UserService;
  @observable userList: User[] = [];

  constructor() {
    makeObservable(this);
    const userRepo = new UserRESTRepository();
    this.userService = new UserService(userRepo);
  }

  refreshList = async () => {
    const users = await this.userService.getUsers();
    runInAction(() => (this.userList = users));
  };
}

export const userStore = new UserStore();
