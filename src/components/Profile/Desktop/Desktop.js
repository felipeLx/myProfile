import React from 'react';
import { Grid, Cell } from 'react-mdl';

import classes from './Desktop.module.css';
import Resume from './Resume/Resume';
import profile from '../../../assets/images/1.JPG';
// import Photos from './Photos';

const Desktop = () => {

    return(
    <div style={{width:'90%', margin: 'auto', textAlign: 'center'}}>
        <Grid>
            <Cell col={12}>
                <img className={classes.Picture} src={profile} alt="avatar" />
                <div className={classes.BannerText}>
                    <h1>Full Stack Developer</h1>
                    <hr />
                    <p>HTML/CSS | JavaScript | React | NodeJS | Java | Spring | mySQL | mongoDB</p>
                    <div>
                        <a href="https://linkedin.com/in/felipealisboa" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </Cell>
        </Grid>
        <Resume />
    </div>

    );
}

export default Desktop;