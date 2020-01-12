import * as actionTypes from './actionTypes';

export const sendEmailSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.SEND_EMAIL_SUCCESS,
        orderId: id,
        orderData: orderData
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

export const sendEmail = ( orderData ) => {
    return {
        type: actionTypes.SEND_EMAIL,
        orderData: orderData,
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
        orders: emails
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