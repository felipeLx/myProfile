import React from 'react';

import classes from './Map.module.css';
import map from '../../../assets/images/myexp.png';

const Map = () => {
    const openRio = () => {
        console.log("RJ clicked");
    }
    
    const openFloripa = () => {
        console.log("SC clicked");
    }

    const openLisbon = () => {
        console.log("Lx clicked");
    }

    const openSpain = () => {
        console.log("Sp clicked");
    }

    return (
        <div className={classes.Map}>
            <map name="map">
                <div className={classes.Rio} >
                <area alt="rio" shape="rect" coords="460,789,493,816" onClick={openRio} />
                <area className={classes.Floripa} alt="floripa" shape="rect" coords="403,878,430,901" onClick={openFloripa} />
                <area className={classes.Spain} alt="spain" shape="rect" coords="798,113,830,140" onClick={openSpain} />
                <area className={classes.Lisbon} alt="lisbon" shape="rect" coords="723,134,757,160" onClick={openLisbon} />
                </div>
            </map>
            <img 
                src={map} 
                alt="world experience"
                usemap="#map" />    
        </div>
    );
};

export default Map;