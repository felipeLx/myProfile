import { put } from 'redux-saga/effects';
import axios from '../../axios-firebase';

import * as actions from '../actions/index';

export function* sendEmailSaga(action) {
    
    yield put( actions.sendEmailStart() );
    try{
        const response = yield axios.post( '/contact.json?auth=' + action.token, action.orderData )
        //console.log( response.data );
        yield put( actions.sendEmailSuccess( response.data.name, action.orderData ) );
        } catch(error)  {
                yield put( actions.sendEmailFail( error ) );
        } 
}

export function* fetchEmailsSaga(action) {
    yield put(actions.fetchEmailsStart());
        const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        try{
            const response = yield axios.get( '/contact.json' + queryParams );
            const fetchedEmails = [];
                for ( let key in response.data ) {
                    fetchedEmails.push( {
                        ...response.data[key],
                        id: key
                    } );
                }
                yield put(actions.fetchEmailsSuccess(fetchedEmails));    
        } catch(error) {
            yield put(actions.fetchEmailsFail(error));
          }
    } 