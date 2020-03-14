import React from 'react';
import PropTypes from 'prop-types';
import { matchesRoute } from './routeHelpers';

export function OrRoute({ children, paths = [], route }) {
  const matches = matchesRoute(paths, route);
  return <>{matches && children}</>;
}

OrRoute.propTypes = {
  children: PropTypes.any.isRequired,
  paths: PropTypes.array,
  route: PropTypes.object.isRequired,
};

export default OrRoute;
