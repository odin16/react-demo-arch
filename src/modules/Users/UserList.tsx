import { observer } from 'mobx-react-lite';
import { useStore } from '../../utils';
import { UserStore } from './store';

export const UserList = observer(() => {
  const { userList, refreshList } = useStore(UserStore);

  return (
    <div>
      <button onClick={refreshList}>Refresh</button>

      <ul>
        {userList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
});
