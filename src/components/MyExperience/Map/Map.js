import React, { useState } from 'react';

import classes from './Map.module.css';
import map from '../../../assets/images/myexp.png';
import Rio from './Rio/Rio';
import Floripa from './Floripa/Floripa';
import Lisbon from './Lisbon/Lisbon';
import Spain from './Spain/Spain';

const Map = () => {

    const [showRioComponent, setShowRioComponent] = useState(false);
    const [showFloripaComponent, setShowFloripaComponent] = useState(false);
    const [showLisbonComponent, setShowLisbonComponent] = useState(false);
    const [showSpainComponent, setShowSpainComponent] = useState(false);

    const openRio = (e) => {
        e.preventDefault();
        setShowRioComponent(true);
    }
    
    const openFloripa = (e) => {
        e.preventDefault();
        setShowFloripaComponent(true);
    }

    const openLisbon = (e) => {
        e.preventDefault();
        setShowLisbonComponent(true);
    }

    const openSpain = (e) => {
        e.preventDefault();
        setShowSpainComponent(true);
    }

    return (
        <div className={classes.Map}>
            <map name="map">
                <div className={classes.Area} >
                <area alt="rio" shape="rect" coords="460,789,493,816" onClick={(e) => openRio(e)} />
                    {showRioComponent && <Rio />}
                <area alt="floripa" shape="rect" coords="403,878,430,901" onClick={(e) => openFloripa(e)} />
                    {showFloripaComponent && <Floripa />}
                <area alt="spain" shape="rect" coords="798,113,830,140" onClick={(e) => openSpain(e)} />
                    {showSpainComponent && <Spain />}
                <area alt="lisbon" shape="rect" coords="723,134,757,160" onClick={(e) => openLisbon(e)} />
                    {showLisbonComponent && <Lisbon />}
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