import { PathRouteProps } from 'react-router-dom';

export interface AppModule {
  key: string;
  label: string;
  routeProps: PathRouteProps;
}
