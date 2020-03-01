import React from 'react';
import Cloud1 from 'images/svg/clouds/cloud1.svg';
import Cloud2 from 'images/svg/clouds/cloud2.svg';
import Cloud3 from 'images/svg/clouds/cloud3.svg';
import Cloud4 from 'images/svg/clouds/cloud4.svg';
import Cloud5 from 'images/svg/clouds/cloud5.svg';
import Cloud6 from 'images/svg/clouds/cloud6.svg';
import PropTypes from 'prop-types';
import { randomInteger } from '../../../../utils/helpers/genericFunctions';
import './clouds.scss';

const Clouds = ({ numberOfClouds }) => {
  console.log('----->Clouds rendered');
  const cloudTypes = [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Cloud6];
  const clouds = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numberOfClouds; i++) {
    const style = {
      width: `${randomInteger(150, 300)}px`,
      top: `${randomInteger(100, 500)}px`,
      animation: `toLeftOutside  ${randomInteger(300, 350)}s infinite`,
      animationDelay: `${randomInteger(-300, 300)}s`,
    };

    clouds.push(
      <img
        src={cloudTypes[randomInteger(1, 6) - 1]}
        className="cloud"
        alt={`cloud${i}`}
        key={`cloud${i}`}
        style={style}
      />,
    );
  }
  return <React.Fragment>{clouds}</React.Fragment>;
};
Clouds.propTypes = {
  numberOfClouds: PropTypes.number,
};
export default Clouds;
