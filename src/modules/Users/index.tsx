import { AppModule, lazyLoad } from '../../utils';

const Users = lazyLoad(
  () => import('./Users'),
  module => module.Users,
);

const module: AppModule = {
  key: 'users',
  label: 'Users',
  routeProps: {
    path: '/users',
    element: <Users />,
  },
};

export * from './atoms';
export default module;
