import LoginPage from 'containers/Auth/LoginPage/Loadable';
import SignUpPage from 'containers/Auth/SignUpPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import DashboardPage from 'containers/Dashboard/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import * as paths from './paths';

const routes = [
  {
    id: 'login',
    props: {
      path: paths.login,
      component: LoginPage,
    },
  },
  {
    id: 'signUp',
    props: {
      path: paths.signUp,
      component: SignUpPage,
    },
  },
  {
    id: 'home',
    props: {
      path: paths.home,
      component: HomePage,
      exact: true,
    },
    layout: true,
  },
  {
    id: 'features',
    props: {
      path: paths.features,
      component: FeaturePage,
    },
    layout: true,
  },
  {
    id: 'dashboard',
    props: {
      path: paths.dashboard,
      component: DashboardPage,
    },
    layout: true,
  },
  {
    id: 'notFound',
    props: {
      path: paths.notFound,
      component: NotFoundPage,
    },
    layout: true,
  },
];

export default routes;
