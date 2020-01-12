import React from 'react';

import classes from './Map.module.css';
import map from '../../..assets/images/myexp.png';

const Map = () => {
    const openRioExperience = () => {
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
                <area alt="rio" shape="rect" coords="460,789,493,816" onClick="alert('square');return false" />
                <area alt="floripa" shape="rect" coords="403,878,430,901" onClick={openFloripa} />
                <area alt="spain" shape="rect" coords="798,113,830,140" onClick={openSpain} />
                <area alt="lisbon" shape="rect" coords="723,134,757,160" onClick={openLisbon} />
            </map>
            <img 
                src={map} 
                alt="world experience"
                usemap="#map" />    
        </div>
    );
};

export default Map;