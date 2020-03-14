import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleAnimation } from './Transition/DisableTransition/actions';
import TransitionPush from './TransitionPush';

export const GenericRoute = ({
  isAuthenticated = false,
  children,
  layout,
  privateRoute,
  toogleAnimation,
  ...props
}) => {
  if (privateRoute && !isAuthenticated) {
    return <TransitionPush to="/" />;
  }
  return <Route {...props}>{children}</Route>;
};

GenericRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  children: PropTypes.node.isRequired,
  layout: PropTypes.bool,
  privateRoute: PropTypes.bool,
  toogleAnimation: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    toogleAnimation: enable => dispatch(toggleAnimation(enable)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(GenericRoute);
