import ResponsiveSaga from '../../utils/sagas/ResponsiveSaga';
import BackgroundSaga from '../../utils/sagas/BackgroundSaga';

export default function* rootSaga() {
  yield ResponsiveSaga();
  yield BackgroundSaga();
}
