import { observer } from 'mobx-react-lite';
import { StoreProvider, useStore } from '../../utils';
import { DashboardStore } from '../Dashboard';
import { UserStore } from './store';
import { UserList } from './UserList';

export const Users = observer(() => {
  const { hello } = useStore(DashboardStore);

  return (
    <StoreProvider stores={[UserStore]}>
      <h2>Users Module</h2>
      <h4>Hello {hello}</h4>
      <UserList />
    </StoreProvider>
  );
});
