import { atom } from 'recoil';

interface DashboardState {
  hello: string;
}

export const dashboardState = atom<DashboardState>({
  key: 'dashboard',
  default: {
    hello: 'world',
  },
});
