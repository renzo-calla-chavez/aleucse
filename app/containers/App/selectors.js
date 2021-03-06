/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectSize = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.screenSize,
  );
const makeSelectBackground = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.background,
  );

const makeSelectAnimation = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.animation,
  );

export {
  selectGlobal,
  selectRouter,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectSize,
  makeSelectBackground,
  makeSelectAnimation,
};
