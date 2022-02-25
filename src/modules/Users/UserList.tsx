import { observer } from 'mobx-react-lite';
import { useUser } from './hooks';

export const UserList = observer(() => {
  const { userList, refreshList } = useUser();

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
