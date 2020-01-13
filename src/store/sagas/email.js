import { put } from 'redux-saga/effects';
import axios from 'axios';
import firebase from 'firebase/firebase-database';

import * as actions from '../actions/index';

export function* sendEmailSaga(action) {
    
    yield put( actions.sendEmailStart() );
    try{
        const response = yield axios.post( 
            'https://us-central1-imessanger-39b6d.cloudfunctions.net/submit', action.emailData)
            .then(res => {
                return firebase
                    .database()
                    .ref('contact')
                    .push(action.emailData);
            })
            .catch(err => {
                console.log(err);
            })

        yield put( actions.sendEmailSuccess( response.data.name, action.emailData ) );
        } catch(error)  {
                yield put( actions.sendEmailFail( error ) );
        } 
}

export function* fetchEmailsSaga(action) {
    yield put(actions.fetchEmailsStart());
        try{
            const response = yield axios.get( '/contact.json' );
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