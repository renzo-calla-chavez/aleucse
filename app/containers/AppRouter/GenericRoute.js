import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const GenericRoute = ({
  isAuthenticated = false,
  children,
  layout,
  privateRoute,
  ...props
}) => (
  <Route {...props}>
    {privateRoute && !isAuthenticated ? <Redirect to="/" /> : children}
  </Route>
);

GenericRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  children: PropTypes.node.isRequired,
  layout: PropTypes.bool,
  privateRoute: PropTypes.bool,
};

export default GenericRoute;
