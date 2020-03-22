/**
 *
 * SignUpPage
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
import makeSelectSignUpPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function SignUpPage() {
  useInjectReducer({ key: 'signUpPage', reducer });
  useInjectSaga({ key: 'signUpPage', saga });

  return (
    <div>
      <Helmet>
        <title>SignUpPage</title>
        <meta name="description" content="Description of SignUpPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SignUpPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signUpPage: makeSelectSignUpPage(),
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
)(SignUpPage);
