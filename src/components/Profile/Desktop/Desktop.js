import React from 'react';
import { Grid, Cell } from 'react-mdl';

import classes from './Desktop.module.css';
import Resume from './Resume/Resume';
import Header from '../../Header/Header'

const Desktop = () => {

    return(
    <div style={{width:'100%', textAlign: 'center'}}>
        <Header />
        <section id='profile' className={classes.Desktop}>
            <div className={classes.BannerText}>
                        <h1>Full Stack Developer</h1>
                        <div>
                        <span className={classes.Techs}><strong>HTML/CSS - JavaScript - React - NodeJS - Java - Spring - mySQL - mongoDB</strong></span>
                        </div>
                        <div className={classes.Links}>
                            <a href="https://linkedin.com/in/felipealisboa" rel="noopener noreferrer" target="_blank">
                            <i style={{color:'black'}} className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
            <Resume />
        </section>
    </div>

    );
}

export default Desktop;