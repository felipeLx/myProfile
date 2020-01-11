import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../../axios-firebase';

import { updateObject, checkValidity } from '../../../shared/utility';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Spinner from '../../UI/Spinner/Spinner'
import classes from './Form.module.css';
import * as actions from '../../../store/actions/index';

const Form = React.memo(props => {
    const [sendEmail, setSendEmail] = useState = ({
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

    const orderHandler = ( event ) => {
        event.preventDefault();
  
        const formData = {};
        for (let formElementIdentifier in sendEmail) {
            formData[formElementIdentifier] = sendEmail[formElementIdentifier].value;
        }
        const order = {
            orderData: formData,
            userId: props.userId
        }

        props.onSendEmail(order, props.token);
        
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        
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
        <form onSubmit={orderHandler}>
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
    if ( this.props.loading ) {
        form = <Spinner />;
    }
    return (
        <div className={classes.Form}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    );
});

const mapStateToProps = state => {
    return {
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSendEmail: (orderData,token) => dispatch(actions.sendEmail(orderData, token))
    };
};


export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Form, axios));