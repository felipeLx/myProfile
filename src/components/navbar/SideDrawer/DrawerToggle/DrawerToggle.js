import React from 'react';

import Contact from '../../../../containers/Contact/Contact';
import Experience from '../../../../containers/Experience/Experience';
import Profile from '../../../../containers/Profile/Profile';
import Games from '../../../../containers/Games/Games';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div>
            <Profile />
            <Experience />
            <Games />
            <Contact />
        </div>
    </div>
);

export default drawerToggle;