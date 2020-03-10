import React from 'react';
import { matchPath } from 'react-router-dom';
import PropTypes from 'prop-types';

export function OrRoute({ children, paths = [], route: { pathname } }) {
  const matches = paths.some(({ props }) => matchPath(pathname, props));
  return <>{matches && children}</>;
}

OrRoute.propTypes = {
  children: PropTypes.any.isRequired,
  paths: PropTypes.array,
  route: PropTypes.object.isRequired,
};

export default OrRoute;
