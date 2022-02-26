import { PathRouteProps } from 'react-router-dom';

export type StoreClass<T = {}> = new (...args: any[]) => T;

export type StoreFactory<T = {}> = (...args: any[]) => T;

export interface AppModule {
  key: string;
  label: string;
  routeProps: PathRouteProps;
  stores?: (StoreClass | StoreFactory)[];
}
