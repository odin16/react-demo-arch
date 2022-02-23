import { observer } from 'mobx-react-lite';
import { userStore } from './store';

export const Users = observer(() => {
  const { userList, refreshList } = userStore;

  return (
    <div>
      <h2>Users Module</h2>
      <button onClick={refreshList}>Refresh</button>

      <ul>
        {userList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
});
