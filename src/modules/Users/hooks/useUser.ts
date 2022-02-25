import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { userListState } from '../atoms';
import { UserRESTRepository, UserService } from '../core';

export const useUser = () => {
  const [userList, setUserList] = useRecoilState(userListState);

  const userService = useMemo(() => {
    const userRepo = new UserRESTRepository();
    return new UserService(userRepo);
  }, []);

  const refreshList = async () => {
    const users = await userService.getUsers();
    setUserList(users);
  };

  return {
    userList,
    refreshList,
  };
};
