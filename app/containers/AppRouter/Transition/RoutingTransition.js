import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import './routerTransition.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { routingTimeout } from './constants';
import { makeSelectAnimation } from '../../App/selectors';
import { toggleAnimation } from './DisableTransition/actions';

const RoutingTransition = ({
  children,
  location,
  animation,
  canAnimate,
  toogleAnimation,
}) => {
  if (!canAnimate) {
    toogleAnimation();
    return <div className="page">{children}</div>;
  }
  return (
    <TransitionGroup className="pageAnimationWrapper">
      <CSSTransition
        key={location.pathname}
        timeout={routingTimeout}
        classNames={animation}
        mountOnEnter={false}
        unmountOnExit={false}
      >
        <div className="page">{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

RoutingTransition.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  animation: PropTypes.string.isRequired,
  canAnimate: PropTypes.bool,
  toogleAnimation: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  canAnimate: makeSelectAnimation(),
});

function mapDispatchToProps(dispatch) {
  return {
    toogleAnimation: () => dispatch(toggleAnimation()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RoutingTransition);
