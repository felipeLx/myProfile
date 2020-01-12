import React, { useState } from 'react';

import classes from './Map.module.css';
import map from '../../../assets/images/myexp.png';
import Rio from './Rio/Rio';
import Floripa from './Floripa/Floripa';
import Lisbon from './Lisbon/Lisbon';
import Spain from './Spain/Spain';

const Map = props => {
    const [showMap, setShowMap] = useState(true);
    const [showRioComponent, setShowRioComponent] = useState(false);
    const [showFloripaComponent, setShowFloripaComponent] = useState(false);
    const [showLisbonComponent, setShowLisbonComponent] = useState(false);
    const [showSpainComponent, setShowSpainComponent] = useState(false);

    const openRio = (e) => {
        e.preventDefault();
        if(!showRioComponent) {
        setShowRioComponent(true);
        setShowMap(false);
        } else {
            setShowRioComponent(false);
            setShowMap(true);
        }
    }
    
    const openFloripa = (e) => {
        e.preventDefault();
        if(!showFloripaComponent) {
        setShowFloripaComponent(true);
        setShowMap(false);
        } else {
            setShowFloripaComponent(false);
            setShowMap(true);
        }
    }

    const openLisbon = (e) => {
        e.preventDefault();
        if(!showLisbonComponent) {
        setShowLisbonComponent(true);
        setShowMap(false);
        } else {
            setShowLisbonComponent(false);
            setShowMap(true);
        }
    }

    const openSpain = (e) => {
        e.preventDefault();
        if(!showSpainComponent) {
        setShowSpainComponent(true);
        setShowMap(false);
        } else {
            setShowSpainComponent(false);
            setShowMap(true);
        }
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
            {showMap && <img 
                src={map} 
                alt="world experience"
                useMap="#map" />    
            }    
        </div>
    );
};

export default Map;