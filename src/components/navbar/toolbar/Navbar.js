import React from 'react';

import classes from './Toolbar.module.css';
import Picture from '../../Picture/Picture';
import NavigationItems from '../NavigationItems/NavigationItems';

const Navbar = ( props ) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Picture />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Navbar;