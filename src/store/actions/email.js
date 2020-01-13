import * as actionTypes from './actionTypes';

export const sendEmailSuccess = ( id, emailData ) => {
    return {
        type: actionTypes.SEND_EMAIL_SUCCESS,
        emailId: id,
        emailData: emailData
    };
};

export const sendEmailFail = ( error ) => {
    return {
        type: actionTypes.SEND_EMAIL_FAIL,
        error: error
    };
}

export const sendEmailStart = () => {
    return {
        type: actionTypes.SEND_EMAIL_START
    };
};

export const sendEmail = ( emailData ) => {
    return {
        type: actionTypes.SEND_EMAIL,
        emailData: emailData,
    }
};

export const emailInit = () => {
    return {
        type: actionTypes.EMAIL_INIT
    };
};

export const fetchEmailsSuccess = ( emails ) => {
    return {
        type: actionTypes.FETCH_EMAILS_SUCCESS,
        emails: emails
    };
};

export const fetchEmailsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_EMAILS_FAIL,
        error: error
    };
};

export const fetchEmailsStart = () => {
    return {
        type: actionTypes.FETCH_EMAILS_START
    };
};

export const fetchEmails = () => {
    return {
        type: actionTypes.FETCH_EMAILS,
    }
};