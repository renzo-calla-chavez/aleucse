import React from 'react';
import Sun from 'images/svg/sun.svg';
import './day.scss';
import Clouds from '../clouds/Clouds';

const DayBackground = () => (
  <div className="day">
    <img src={Sun} alt="" className="sun" />
    <Clouds />
  </div>
);
export default DayBackground;
