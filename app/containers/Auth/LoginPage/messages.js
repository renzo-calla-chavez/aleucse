/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  header: {
    id: `${scope}.welcome`,
    defaultMessage: 'Welcome',
  },
  forgot: {
    id: `${scope}.forgot`,
    defaultMessage: 'Forgot your password?',
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign Up',
  },
});
