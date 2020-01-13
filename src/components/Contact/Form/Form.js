import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { config } from '../../../axios-firebase';
import firebase from 'firebase/app';
import axios from 'axios';

import { updateObject, checkValidity } from '../../../shared/utility';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Spinner from '../../UI/Spinner/Spinner'
import classes from './Form.module.css';
import * as actions from '../../../store/actions/index';


const Form = props => {
    const [sendEmail, setSendEmail] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        message: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Message'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    });

    const [formIsValid, setFormIsValid] = useState(false);
    const [firebaseApp, setFirebaseApp] = useState();

    useEffect(() => {
        if (!firebase) {
            setFirebaseApp(firebase.initializeApp(config));
          }
    }, []);

    const emailHandler = ( event ) => {
        event.preventDefault();
        console.log('sent');
        const formData = {};
        for (let formElementIdentifier in sendEmail) {
            formData[formElementIdentifier] = sendEmail[formElementIdentifier].value;
        }
        const email = {
            emailData: formData,
            time: new Date().toDateString()
        }
        props.onSendEmail(email);
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        console.log('inputChangedHandler');
        const updatedFormElement = updateObject(sendEmail[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, sendEmail[inputIdentifier].validation),
            touched: true
        });
        const updatedOrderForm = updateObject(sendEmail, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        setSendEmail(updatedOrderForm);
        setFormIsValid(formIsValid);
    }
   
    const formElementsArray = [];
    for (let key in sendEmail) {
        formElementsArray.push({
            id: key,
            config: sendEmail[key]
        });
    }   
    let form = (
        <form onSubmit={emailHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}
            <Button btnType="Success" disabled={!formIsValid}>SEND</Button>
        </form>
    );
    if ( props.loading ) {
        form = <Spinner />;
    }
    return (
        <div className={classes.Form}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.email.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSendEmail: (emailData) => dispatch(actions.sendEmail(emailData))
    };
};


export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Form, axios));