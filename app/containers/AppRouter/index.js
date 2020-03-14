/**
 *
 * AppRouter
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import routes from 'utils/Routes/routes';
import Header from 'components/Header';
import Footer from 'components/Footer';

import RoutingTransition from './Transition/RoutingTransition';
import { selectRouter } from '../App/selectors';
import GenericRoute from './GenericRoute';
import { matchesRoute } from './routeHelpers';
import TransitionPush from './TransitionPush';

export function AppRouter({ route: { location } }) {
  const layoutRoutes = routes.filter(({ layout }) => layout);
  const matches = matchesRoute(routes, location);
  const header = matchesRoute(layoutRoutes, location);
  if (!matches) {
    return <TransitionPush to="/404" />;
  }
  return (
    <div className="appWrapper">
      {header && <Header />}
      <RoutingTransition animation="left" location={location}>
        <Switch location={location}>
          {routes.map(
            ({
              id,
              props: { component: Component, ...props },
              layout,
              privateRoute,
            }) => (
              <GenericRoute
                key={id}
                {...props}
                layout={layout}
                privateRoute={privateRoute}
              >
                <Component className="screen" />
              </GenericRoute>
            ),
          )}
        </Switch>
      </RoutingTransition>
      {header && <Footer />}
    </div>
  );
}

AppRouter.propTypes = {
  route: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  route: selectRouter,
});

export default connect(mapStateToProps)(AppRouter);
