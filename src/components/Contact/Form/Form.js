import React, { useState, useEffect } from 'react';
import { config, instance } from '../../../axios-firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import axios from 'axios';

import { updateObject, checkValidity } from '../../../shared/utility';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Spinner from '../../UI/Spinner/Spinner'
import classes from './Form.module.css';

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

    useEffect(() => {
        firebase.initializeApp(config);
    }, []);

    const emailHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in sendEmail) {
            formData[formElementIdentifier] = sendEmail[formElementIdentifier].value;
        }
        const email = {
            emailData: formData,
            time: new Date().toDateString()
        }
        const database = firebase.database();
        axios.post('https://us-central1-imessanger-39b6d.cloudfunctions.net/submit', email)
            .then(res => {
                if(firebase){
                    return database.ref('/contact').push(email);
                }
            })
            .catch(err => {
                console.log(err);
            });
            setSendEmail({name:{value:''}, email:{value:''}, message:{value:''}});
    };

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(sendEmail[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, sendEmail[inputIdentifier].validation),
            touched: true
        });
        const updatedEmailForm = updateObject(sendEmail, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedEmailForm) {
            formIsValid = updatedEmailForm[inputIdentifier].valid && formIsValid;
        }
        setSendEmail(updatedEmailForm);
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

export default withErrorHandler(Form, instance);