/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { makeSelectBackground, makeSelectSize } from 'containers/App/selectors';

import AppRouter from 'containers/AppRouter';

import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import GlobalStyle from '../../global-styles';
import '../../styles/global.scss';
import PageBackground from '../../components/PageBackground';
import saga from './saga';

const key = 'appRoot';

function App({ size, background }) {
  useInjectSaga({ key, saga });

  // TODO: login page
  // TODO: sign in page structure
  // TODO: header and footer animation
  // TODO: dynamic left right routing transition
  // TODO: set Sign in DB, facebook, google
  // TODO: use theme, adding material UI
  // TODO: loading

  return (
    <PageBackground size={size} background={background}>
      <>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <AppRouter />
        <GlobalStyle />
      </>
    </PageBackground>
  );
}

App.propTypes = {
  size: PropTypes.object.isRequired,
  background: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  size: makeSelectSize(),
  background: makeSelectBackground(),
});

export default connect(mapStateToProps)(App);
