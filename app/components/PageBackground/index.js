import React from 'react';
import PropTypes from 'prop-types';
import './background.scss';
import NightBackground from './backgrounds/night/night';

const PageBackground = ({ children }) => {
  console.log('background set');
  return (
    <div>
      <div className="background-wrapper">
        <div className="background">
          <NightBackground />
        </div>
      </div>
      {/*<div>{children}</div>*/}
    </div>
  );
};
PageBackground.propTypes = {
  children: PropTypes.object.isRequired,
};
export default PageBackground;
