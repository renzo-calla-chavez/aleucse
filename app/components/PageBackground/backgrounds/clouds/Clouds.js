import React, { useContext } from 'react';
import Cloud1 from 'images/svg/clouds/cloud1.svg';
import Cloud2 from 'images/svg/clouds/cloud2.svg';
import Cloud3 from 'images/svg/clouds/cloud3.svg';
import Cloud4 from 'images/svg/clouds/cloud4.svg';
import Cloud5 from 'images/svg/clouds/cloud5.svg';
import Cloud6 from 'images/svg/clouds/cloud6.svg';
import { randomInteger } from '../../../../utils/helpers/genericFunctions';
import './clouds.scss';
import { ScreenSizeContext } from '../../contexts';

const Clouds = () => {
  const size = useContext(ScreenSizeContext);
  const cloudsSize = [150, 300];
  let numberOfClouds = 5;
  let animationSpeed = [70, 80];
  let topPosition = [50, 200];

  if (size.isSmMd) {
    numberOfClouds = 7;
    animationSpeed = [150, 200];
    topPosition = [50, 400];
  }
  if (size.lg) {
    numberOfClouds = 20;
    animationSpeed = [300, 350];
    topPosition = [100, 600];
  }

  const cloudTypes = [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Cloud6];
  const clouds = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numberOfClouds; i++) {
    const w = randomInteger(cloudsSize[0], cloudsSize[1]);
    const style = {
      width: `${w}px`,
      right: `${w * -1}px`,
      top: `${randomInteger(topPosition[0], topPosition[1])}px`,
      animation: `toLeftOutside  ${randomInteger(
        animationSpeed[0],
        animationSpeed[1],
      )}s infinite`,
      animationDelay: `${randomInteger(
        animationSpeed[0] * -1,
        animationSpeed[0],
      )}s`,
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
  return <>{clouds}</>;
};
export default Clouds;
