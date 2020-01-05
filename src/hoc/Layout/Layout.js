import React, { useState } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Navbar from '../../components/navbar/toolbar/Navbar';

const layout = React.memo(props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

        return (
            <Aux>
                <Navbar
                    drawerToggleClicked={sideDrawerToggleHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        )
});


export default layout;