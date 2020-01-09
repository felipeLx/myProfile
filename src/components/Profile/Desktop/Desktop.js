import React from 'react';
import { Grid, Cell } from 'react-mdl';

import classes from './Desktop.module.css';
import profile from '../../../assets/images/1.JPG';
// import Photos from './Photos';

const Desktop = () => (
    <div style={{width:'100%', margin: 'auto'}}>
        <Grid>
            <Cell col={12}>
                <img className={classes.Picture} src={profile} alt="avatar" />
                <div className={classes.BannerText}>
                    <h1>Full Stack Developer</h1>
                </div>
            </Cell>
        </Grid>
    </div>

    );

export default Desktop;