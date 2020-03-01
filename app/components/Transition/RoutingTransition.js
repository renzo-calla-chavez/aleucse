import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { routingTimeout } from './constants';
import './routerTransition.scss';

const RoutingTransition = ({ children, route, animation }) => (
  <TransitionGroup className="pageAnimationWrapper">
    <CSSTransition
      key={route.pathname}
      timeout={routingTimeout}
      classNames={animation}
      mountOnEnter={false}
      unmountOnExit
    >
      <div className="page">{children}</div>
    </CSSTransition>
  </TransitionGroup>
);

RoutingTransition.propTypes = {
  route: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  animation: PropTypes.string.isRequired,
};
export default RoutingTransition;
