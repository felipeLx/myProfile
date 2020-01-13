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

    window.onload = function () {
        var ImageMap = function (map, img) {
                var n,
                    areas = map.getElementsByTagName('area'),
                    len = areas.length,
                    coords = [],
                    previousWidth = 128;
                for (n = 0; n < len; n++) {
                    coords[n] = areas[n].coords.split(',');
                }
                this.resize = function () {
                    var n, m, clen,
                        x = img.offsetWidth / previousWidth;
                    for (n = 0; n < len; n++) {
                        clen = coords[n].length;
                        for (m = 0; m < clen; m++) {
                            coords[n][m] *= x;
                        }
                        areas[n].coords = coords[n].join(',');
                    }
                    previousWidth = document.body.clientWidth;
                    return true;
                };
                window.onresize = this.resize;
            },
            imageMap = new ImageMap(document.getElementById('map_ID'), document.getElementById('img_ID'));
        imageMap.resize();
        return;
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
        
        <div>
            <map name="map" id="mapID">
                <div className={classes.Area} >
                <area alt="rio" shape="poly" coords="460,789,493,816" onClick={openRio} />
                    {showRioComponent && <Rio />}
                <area alt="floripa" shape="poly" coords="403,878,430,901" onClick={openFloripa} />
                    {showFloripaComponent && <Floripa />}
                <area alt="spain" shape="poly" coords="798,113,830,140" onClick={openSpain} />
                    {showSpainComponent && <Spain />}
                <area alt="lisbon" shape="poly" coords="723,134,757,160" onClick={openLisbon} />
                    {showLisbonComponent && <Lisbon />}
                </div>
            </map>
            <div>
            {showMap ? 
                <img 
                    id="img_ID"
                    src={map} 
                    width="100%"
                    border="0"
                    alt="world experience"
                    usemap="#map" /> :
                <Button 
                    style={{textAlign: 'center'}}
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