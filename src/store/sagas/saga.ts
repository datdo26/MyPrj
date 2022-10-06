import {takeLatest} from 'redux-saga/effects';
import {handleGetUser} from './handler/user';
import {getUser} from '../ducks/userSlice';

export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetUser);
}
