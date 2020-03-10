import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('header mounted');
    return () => {
      // eslint-disable-next-line no-console
      console.log('header unmounted');
    };
  }, []);
  return (
    <div className="header">
      <FormattedMessage {...messages.message} />
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
        <HeaderLink to="/dashboard">
          <FormattedMessage {...messages.dashboard} />
        </HeaderLink>
        <HeaderLink to="/login">login</HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
