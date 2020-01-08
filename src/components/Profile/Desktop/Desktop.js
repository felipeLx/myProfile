import React from 'react';

import classes from './Desktop.module.css';
import Photos from './Photos';

const Desktop = props => {
    return(
        <div className={classes.Desktop}>
            <Photos />
        </div>
    );

};

export default Desktop;