import React from 'react';
import './stars.scss';
import Asteroids from './Asteroids';

const StarsBackground = () => (
  <div className="stars-wrapper">
    <div className="stars small" />
    <div className="stars medium" />
    <div className="stars large" />

    <Asteroids numberOfAsteroids={1} />
  </div>
);
StarsBackground.propTypes = {};
export default StarsBackground;
