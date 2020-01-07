import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* initPhotosSaga(action) {
    try{
        const response = yield axios.get( 'https://photos.app.goo.gl/8rShUULHWw9gGwXg6' )
        yield put(actions.get(response.data));
    } catch(error) {
        console.log(error.log)
    }
}