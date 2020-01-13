import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    emails: [],
    loading: false,
    sent: false
};

const emailInit = ( state, action ) => {
    return updateObject( state, { sent: false } );
};

const sendEmailStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const sendEmailSuccess = ( state, action ) => {
    const newEmail = updateObject( action.emailData, { id: action.emailId } );
    return updateObject( state, {
        loading: false,
        sent: true,
        emails: state.emails.concat( newEmail )
    } );
};

const sendEmailFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchEmailsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchEmailsSuccess = ( state, action ) => {
    return updateObject( state, {
        emails: action.emails,
        loading: false
    } );
};

const fetchEmailsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.EMAIL_INIT: return emailInit( state, action );
        case actionTypes.SEND_EMAIL_START: return sendEmailStart( state, action );
        case actionTypes.SEND_EMAIL_SUCCESS: return sendEmailSuccess( state, action )
        case actionTypes.SEND_EMAIL_FAIL: return sendEmailFail( state, action );
        case actionTypes.FETCH_EMAILS_START: return fetchEmailsStart( state, action );
        case actionTypes.FETCH_EMAILS_SUCCESS: return fetchEmailsSuccess( state, action );
        case actionTypes.FETCH_EMAILS_FAIL: return fetchEmailsFail( state, action );
        default: return state;
    }
};

export default reducer;