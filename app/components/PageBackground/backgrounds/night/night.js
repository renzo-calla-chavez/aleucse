import React from 'react';
import Moon from 'images/svg/moon.svg';
import './night.scss';
import Clouds from '../clouds/Clouds';
import Stars from '../stars/Stars';

const NightBackground = () => (
  <div className="night">
    <img src={Moon} alt="" className="moon" />
    <Stars />
    <Clouds />
  </div>
);
NightBackground.propTypes = {};
export default NightBackground;
