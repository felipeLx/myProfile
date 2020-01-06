import React from 'react';

import classes from './Navbar.module.css';
import Picture from '../../Picture/Picture';
import NavigationItems from '../NavigationItems/NavigationItems';

const Navbar = ( props ) => (
    <header className={classes.Navbar}>
        <Picture />
        <div className={classes.Logo}>
        
        <nav className={classes.DesktopOnly}>
            
            <NavigationItems />
        </nav>
        </div>
    </header>
);

export default Navbar;