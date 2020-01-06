import React from 'react';

import classes from './Navbar.module.css';
import Picture from '../../Picture/Picture';
import NavigationItems from '../NavigationItems/NavigationItems';

const Navbar = ( props ) => (
    <header className={classes.Navbar}>
        <div className={classes.Logo}>
            <Picture />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        </div>
    </header>
);

export default Navbar;