import { TOGGLE_ANIMATION } from './constants';

/**
 * Changes the animation
 *
 * @param  {boolean} enable or disables the routing animations
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function toggleAnimation(enable = true) {
  return {
    type: TOGGLE_ANIMATION,
    enable,
  };
}
