import { all, takeLatest } from 'redux-saga/effects';

import { userLogin } from './user';
import { Types as UserTypes } from '../ducks/user';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.LOGIN_REQUEST, userLogin),
  ]);
}
