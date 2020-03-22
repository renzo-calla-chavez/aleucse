/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { TOGGLE_ANIMATION } from '../AppRouter/Transition/DisableTransition/constants';
import { getScreenSizeRedux } from '../../utils/helpers/ResizeScreenFunctions';

import {
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_REPOS_SUCCESS,
  SET_SCREEN_SIZE,
  SET_BACKGROUND,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  screenSize: getScreenSizeRedux(),
  background: '',
  animation: true,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case SET_SCREEN_SIZE:
        draft.screenSize = getScreenSizeRedux(action.size);
        break;
      case SET_BACKGROUND:
        draft.background = action.background;
        break;
      case TOGGLE_ANIMATION:
        draft.animation = action.enable;
        break;
    }
  });

export default appReducer;
