import { useRecoilValue } from 'recoil';
import { dashboardState } from '../Dashboard';
import { UserList } from './UserList';

export const Users = () => {
  const { hello } = useRecoilValue(dashboardState);

  return (
    <>
      <h4>Hello {hello}</h4>
      <UserList />
    </>
  );
};
