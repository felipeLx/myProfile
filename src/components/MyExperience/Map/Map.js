import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

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

    const openRio = () => {
        console.log('openRio');
        if(!showRioComponent){
            setShowRioComponent(true);
            setShowMap(false);
        }
    }
    
    const openFloripa = () => {
        console.log('openFloripa');
        if(!showFloripaComponent) {
            setShowFloripaComponent(true);
            setShowMap(false);
        }
    }

    const openLisbon = () => {
        console.log('openLisbon');
        if(!showLisbonComponent) {
            setShowLisbonComponent(true);
            setShowMap(false);
        }
    }

    const openSpain = () => {
        console.log('openSpain');
        if(!showSpainComponent) {
            setShowSpainComponent(true);
            setShowMap(false);
        }
    }

    const openMap = () => {
        setShowMap(!showMap);
        setShowRioComponent(false);
        setShowFloripaComponent(false);
        setShowLisbonComponent(false);
        setShowSpainComponent(false);

    }

    return (
        <>
        
        {showMap &&
            <div className={classes.Header}>
                <h3>The most relevant experiences in my professional career</h3>
                <h4>To see all, please check my <a href="https://linkedin.com/in/felipealisboa" rel="noopener noreferrer" target="_blank"><strong>Linkedin profile</strong></a></h4>
                <h5>There you can find my academic experience, too!!</h5>
            </div>
        }
        
        <div className={classes.Map}>
            <map name="map">
                <div className={classes.Area} >
                <area alt="rio" shape="rect" coords="460,789,493,816" onClick={openRio} />
                    {showRioComponent && <Rio />}
                <area alt="floripa" shape="rect" coords="403,878,430,901" onClick={openFloripa} />
                    {showFloripaComponent && <Floripa />}
                <area alt="spain" shape="rect" coords="798,113,830,140" onClick={openSpain} />
                    {showSpainComponent && <Spain />}
                <area alt="lisbon" shape="rect" coords="723,134,757,160" onClick={openLisbon} />
                    {showLisbonComponent && <Lisbon />}
                </div>
            </map>
            <div>
            {showMap ? 
                <img 
                    src={map} 
                    alt="world experience"
                    useMap="#map" /> :
                <Button 
                    variant="outline-dark" 
                    onClick={openMap}>
                        Show the map again!!
                </Button> 
            }
            </div>
        </div>
        </>
    );
};

export default Map;