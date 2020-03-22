/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import lolo from 'images/svg/lolo.svg';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import * as paths from '../../../utils/Routes/paths';
import './loginPage.scss';

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  // TODO: login anmation
  // TODO: loading button

  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <div className="loginPage centerWrapperPage">
        <div className="login">
          <img src={lolo} alt="logo" className="lolo" />
          <p className="welcome">
            <FormattedMessage {...messages.header} />
          </p>
          <LoginForm />
          <div>
            <FormattedMessage {...messages.forgot} />
            <Link to={paths.signUp}>
              <FormattedMessage {...messages.signUp} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
