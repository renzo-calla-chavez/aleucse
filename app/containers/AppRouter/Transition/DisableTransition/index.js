/**
 *
 * DisableTransition
 *
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleAnimation } from './actions';

export function DisableTransition({ children, toogleAnimation }) {
  toogleAnimation(false);
  return children;
}

DisableTransition.propTypes = {
  toogleAnimation: PropTypes.func.isRequired,
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

export default compose(withConnect)(DisableTransition);
