import { PathRouteProps } from 'react-router-dom';

export type Constructor<T = {}> = new (...args: any[]) => T;

export interface AppModule {
  key: string;
  label: string;
  routeProps: PathRouteProps;
  stores?: Constructor[];
}
