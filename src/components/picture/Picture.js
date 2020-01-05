import React from 'react';

import profilePic from '../../assets/images/profile.jpg';
import classes from './Logo.module.css';

const Picture = (props) => (
    <div className={classes.Picture} style={{height: props.height}}>
        <img src={profilePic} alt="MyProfilePic" />
    </div>
);

export default Picture;