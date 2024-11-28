import { lazy } from 'react';
import { HOME_PAGE } from './constants';

interface RouteTypes {
  path: string;
  title: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  allow: boolean;
}

const HomePage = lazy(() => import('@/pages/home/HomePage'));

const coreRoutes: RouteTypes[] = [
  {
    path: HOME_PAGE.PATH,
    title: HOME_PAGE.TITLE,
    component: HomePage,
    // Default true, make it false if you want the route to be protected
    allow: true,
  },
];

export default coreRoutes;
