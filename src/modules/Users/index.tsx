import { lazyLoad } from '../../utils';

const Users = lazyLoad(
  () => import('./Users'),
  module => module.Users,
);

export default {
  key: 'users',
  label: 'Users',
  routeProps: {
    path: '/users',
    element: <Users />,
  },
};
