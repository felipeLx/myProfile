import React from 'react'

import classes from './Footer.module.css'

const Footer = props => {


    return (
        <footer>
            <div className={classes.Footer}>
                <p>@ {new Date().getFullYear()} Felipe Lisboa</p>
            </div>
        </footer>
    )
}

export default Footer