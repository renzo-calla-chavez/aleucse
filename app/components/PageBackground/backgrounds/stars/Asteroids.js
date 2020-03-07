import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { randomInteger } from '../../../../utils/helpers/genericFunctions';
import { angleDeg } from '../../../../utils/helpers/animationFunctions';

const Asteriods = () => {
  const [p1, setP1] = useState({});
  const animationTime = 1;
  const animationDelay = 20;
  const setAsteriod = () =>
    setP1({ x: randomInteger(0, 100), y: randomInteger(0, 30) });

  useEffect(() => {
    setAsteriod();
    const interval = setInterval(() => setAsteriod(), animationDelay * 1000);
    return () => clearInterval(interval);
  }, []);

  const p2 = {
    x: randomInteger(p1.x - 10, p1.x + 10),
    y: randomInteger(p1.y - 10, p1.y + 10),
  };
  const angle = angleDeg(p1, p2);

  const asteroidFrame = keyframes`
      0% {
        width: 50px;
        transform: translate(${p1.x}vw, ${p1.y}vh) rotate(${angle}deg);
      }
      100% {
        width: 0px;
        transform: translate(${p2.x}vw, ${p2.y}vh) rotate(${angle}deg);
      }
    `;
  const Asteroid = styled.div`
    height: 1px;
    width: 0;
    background: white;
    transform: translate(${p1.x}vw, ${p1.y}vh) rotate(${angle}deg);
    transform-origin: 0 0;
    animation: ${asteroidFrame} ${animationTime}s;
  `;

  return <Asteroid />;
};
Asteriods.propTypes = {};
export default Asteriods;
