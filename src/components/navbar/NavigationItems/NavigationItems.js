import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Profile</NavigationItem>
        <NavigationItem link="/experience">Experience</NavigationItem>
        <NavigationItem link="/games">Games</NavigationItem>
        <NavigationItem link="/contact" exact>Contact</NavigationItem>
    </ul>
);

export default NavigationItems;