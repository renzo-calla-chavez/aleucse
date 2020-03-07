import { put, takeLatest, select } from 'redux-saga/effects';
import { setBackground } from 'containers/App/actions';
import { makeSelectBackground } from 'containers/App/selectors';
import { SET_BACKGROUND } from 'containers/App/constants';
import { backgrounds } from 'components/PageBackground/backgrounds/backgroundSelector';
import { randomElement } from '../helpers/genericFunctions';

export default function* rootSaga() {
  yield takeLatest(SET_BACKGROUND);
  const oldId = yield select(makeSelectBackground());
  const bgsToPick = backgrounds.filter(b => b !== oldId);
  const bg = randomElement(bgsToPick);
  // call api or set random background
  yield put(setBackground(bg));
}
