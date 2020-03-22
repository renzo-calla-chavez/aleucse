import React from 'react';
import PropTypes from 'prop-types';
import './background.scss';
import { getBackgroundComponent } from './backgrounds/backgroundSelector';

const BackgroundWrapper = React.memo(({ background }) => {
  const Background = getBackgroundComponent(background);
  if (!Background) return null;

  return (
    <div className="background-wrapper">
      <div className="background">
        <Background />
      </div>
    </div>
  );
});
BackgroundWrapper.propTypes = {
  background: PropTypes.string.isRequired,
};
export default BackgroundWrapper;
