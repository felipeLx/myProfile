import React from 'react';

import profilePic from '../../../assets/images/profile.png';
import classes from './Picture.module.css';

const Picture = (props) => (
    <div className={classes.Picture} style={{height: props.height}}>
        <img src={profilePic} alt="MyProfilePic" />
    </div>
);

export default Picture;