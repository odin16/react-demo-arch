import { AppModule, lazyLoad } from '../../utils';
import { DashboardStore } from './store';

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
  stores: [DashboardStore],
};

export * from './store';
export default module;
