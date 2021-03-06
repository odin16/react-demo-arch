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

export * from './store';
export default module;
