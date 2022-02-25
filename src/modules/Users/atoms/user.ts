import { atom } from 'recoil';
import { User } from '../core';

export const userListState = atom<User[]>({
  key: 'userList',
  default: [],
});
