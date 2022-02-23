import { lazyLoad } from '../../utils';

const Dashboard = lazyLoad(
  () => import('./Dashboard'),
  module => module.Dashboard,
);

export default {
  key: 'dashboard',
  label: 'Dashboard',
  routeProps: {
    path: '/',
    exact: true,
    element: <Dashboard />,
  },
};
