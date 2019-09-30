import { call, put } from 'redux-saga/effects';

import axios from 'axios';
import { Creators as UserActions } from '../ducks/user';

import api from '../../services/api';

export function* userLogin(action) {
  try {
    const { data } = yield call(api.post, { token: action.payload.tokenuid });

    yield put(UserActions.getLoginSuccess(data.token));
  } catch (error) {
    yield put(UserActions.getLoginError());
  }
}
