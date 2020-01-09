import React, { useState } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Navbar from '../../components/navbar/toolbar/Navbar';
import SideDrawer from '../../components/navbar/SideDrawer/SideDrawer';

const layout = React.memo(props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

        return (
            <Aux>
                <Navbar
                    drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    open={showSideDrawer}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        )
});


export default layout;