import React from 'react';
import PropTypes from 'prop-types';
import './background.scss';
import BackgroundWrapper from './BackgroundWrapper';
import { ScreenSizeContext } from './contexts';

const PageBackground = ({ children, size, background }) => (
  <ScreenSizeContext.Provider value={size}>
    <BackgroundWrapper background={background} />
    <div>{children}</div>
  </ScreenSizeContext.Provider>
);
PageBackground.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.object,
  background: PropTypes.string.isRequired,
};
export default PageBackground;
