import { takeEvery, takeLatest } from 'redux-saga/effects';

import * as actionType from '../actions/actionTypes';
import { sendEmailSaga, fetchEmailsSaga } from './email'; 

export function* watchEmail() {
    yield takeLatest(actionType.SEND_EMAIL, sendEmailSaga);
    yield takeEvery(actionType.FETCH_EMAILS, fetchEmailsSaga);
}