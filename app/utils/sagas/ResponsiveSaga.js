import { put, select, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { screenSizeChanged } from 'containers/App/actions';
import { makeSelectSize } from 'containers/App/selectors';
import { resizeHandler } from '../helpers/ResizeScreenFunctions';

export function* setSize(size) {
  const screenSize = yield select(makeSelectSize());
  if (screenSize.current !== size) {
    yield put(screenSizeChanged(size));
  }
}

export default function* rootSaga() {
  // Enable on serverSide Rendering???
  // const initialSize = getInitialSize();
  // yield fork(setSize, initialSize);

  const chan = eventChannel(emit => {
    window.addEventListener('resize', e => {
      const width =
        e.target.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const size = resizeHandler(width);
      emit(size);
    });
    return () => {};
  });
  while (true) {
    yield takeLatest(chan, setSize);
  }
}
