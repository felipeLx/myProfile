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
    
    return (
        <div className={classes.Form}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    );
};

export default withErrorHandler(Form, instance);