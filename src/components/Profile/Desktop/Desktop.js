import React, { useState } from 'react';
import { Grid, Cell } from 'react-mdl';

import classes from './Desktop.module.css';
import profile from '../../../assets/images/1.JPG';
// import Photos from './Photos';

const Desktop = () => {
    const [openProfile, setOpenProfile] = useState(false);

    const profileOpenHandler = () => {
        if(!openProfile) {
            setOpenProfile(true);
        } else {
            setOpenProfile(false);
        }
    }

    const defineSign = () => {
        if(!openProfile) {
            return "+";
        } else {
            return "-";
        }
    }

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
        <button className={classes.Button} onClick={() => profileOpenHandler()}>{defineSign()}</button>
        {openProfile && <Grid className={classes.Profile}>
            <Cell col={4}>
                <p>When I saw the Code for the first time I thought that was some magic.
                   After I learned Java in Academia de Código with the best teachers ever. 
                   Learning Java and OOP opened my mind, I have to work hard to not be behind, in the end of the course we started with JavaScript. 
                   In the course we have to work with Java, Hibernate, Spring, Ajax and mySQL. 
                   When the course end I start to study other libraries. I started with Angular and TypeScript, 
                   was cool, but later I start with React and MongoDB University, that was awesome, 
                   I really identify something that I can be good on it. Study is now my hobby, 
                   I'm continue to study more about Java, Spring, Spring Security and NodeJS to be prepare for the Backend, for the FrontEnd I'm going deep in JavaScript and React and for Database I'm studding MongoDB, Firebase and mySQL.</p>
            </Cell>
        </Grid>}
    </div>

    );
}

export default Desktop;