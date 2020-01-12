import React from 'react';

import classes from './Map.module.css';
import map from '../../../assets/images/myexp.png';
import Rio from './Rio/Rio';
import Floripa from './Floripa/Floripa';

const Map = () => {
    const openRio = () => new Object.call(<Rio />);
    
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
                <div className={classes.Area} >
                <area alt="rio" shape="rect" coords="460,789,493,816" onClick={<Rio />} />
                <area alt="floripa" shape="rect" coords="403,878,430,901" onClick={<Floripa />} />
                <area alt="spain" shape="rect" coords="798,113,830,140" onClick={openSpain} />
                <area alt="lisbon" shape="rect" coords="723,134,757,160" onClick={openLisbon} />
                </div>
            </map>
            <img 
                src={map} 
                alt="world experience"
                useMap="#map" />    
        </div>
    );
};

export default Map;