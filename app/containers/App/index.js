/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeSelectLocation } from 'containers/App/selectors';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import DashboardPage from 'containers/Dashboard/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';

import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import RoutingTransition from '../../components/Transition/RoutingTransition';
import GlobalStyle from '../../global-styles';
import '../../styles/global.scss';
import PageBackground from '../../components/PageBackground';

const AppWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
`;

function App({ route }) {
  // TODO: css mediaqueries, detect js mobile
  // TODO: prevent background rendering
  // TODO: use dinamic backbround
  // TODO: dynamic left right routing transition
  // TODO: use theme, adding material UI
  // TODO: loading

  return (
    <PageBackground>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header />
        <Body>
          <RoutingTransition route={route} animation="up">
            <Switch location={route}>
              <Route exact path="/" component={HomePage} />
              <Route path="/features" component={FeaturePage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </RoutingTransition>
        </Body>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    </PageBackground>
  );
}

App.propTypes = {
  route: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  route: makeSelectLocation(),
});

export default connect(mapStateToProps)(App);
