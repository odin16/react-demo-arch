import { AppModule, lazyLoad } from '../../utils';

const Dashboard = lazyLoad(
  () => import('./Dashboard'),
  module => module.Dashboard,
);

const module: AppModule = {
  key: 'dashboard',
  label: 'Dashboard',
  routeProps: {
    path: '/',
    element: <Dashboard />,
  },
};

export * from './atoms';
export default module;
