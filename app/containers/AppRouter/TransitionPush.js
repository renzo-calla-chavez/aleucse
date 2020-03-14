import history from 'utils/history';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleAnimation } from './Transition/DisableTransition/actions';

/**
 * @return {null}
 */
export function TransitionPush({ toogleAnimation, to }) {
  history.push(to);
  toogleAnimation(false);
  return null;
}

function mapDispatchToProps(dispatch) {
  return {
    toogleAnimation: () => dispatch(toggleAnimation()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(TransitionPush);
