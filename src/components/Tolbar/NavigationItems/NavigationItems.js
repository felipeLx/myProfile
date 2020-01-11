import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Profile</NavigationItem>
        <NavigationItem link="/experience">Experience</NavigationItem>
        <NavigationItem link="/project">Projects</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        {/* <NavigationItem link="/auth">Login</NavigationItem> */}
    </ul>
);

export default NavigationItems;