import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

export function Layout({ children }) {
  return (
    <div className="appWrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
