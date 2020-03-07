import React, { useContext } from 'react';
import './stars.scss';
import Asteroids from './Asteroids';
import { ScreenSizeContext } from '../../contexts';

const StarsBackground = () => {
  const size = useContext(ScreenSizeContext);
  return (
    <div className="stars-wrapper">
      <div className="stars small" />
      <div className="stars medium" />
      <div className="stars large" />
      {size.isSmMdLg && <Asteroids />}
    </div>
  );
};
StarsBackground.propTypes = {};
export default StarsBackground;
