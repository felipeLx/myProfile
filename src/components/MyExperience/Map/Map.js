import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import classes from './Map.module.css';
import map from '../../../assets/images/face.png';
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
        if(!showRioComponent){
            setShowRioComponent(true);
            setShowMap(false);
        }
    }
    
    const openFloripa = () => {
        if(!showFloripaComponent) {
            setShowFloripaComponent(true);
            setShowMap(false);
        }
    }

    const openLisbon = () => {
        if(!showLisbonComponent) {
            setShowLisbonComponent(true);
            setShowMap(false);
        }
    }

    const openSpain = () => {
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

    // useEffect(() => {
    //     window.onload = function () {
    //         let ImageMap = function (map, img) {
    //                 let n,
    //                     areas = map.getElementsByTagName('area'),
    //                     len = areas.length,
    //                     coords = [],
    //                     previousWidth = 128;
    //                 for (n = 0; n < len; n++) {
    //                     coords[n] = areas[n].coords.split(',');
    //                 }
    //                 this.resize = function () {
    //                     let n, m, clen,
    //                         x = img.offsetWidth / previousWidth;
    //                     for (n = 0; n < len; n++) {
    //                         clen = coords[n].length;
    //                         for (m = 0; m < clen; m++) {
    //                             coords[n][m] *= x;
    //                         }
    //                         areas[n].coords = coords[n].join(',');
    //                     }
    //                     previousWidth = document.body.clientWidth;
    //                     return true;
    //                 };
    //                 window.onresize = this.resize;
    //             },
    //             imageMap = new ImageMap(document.getElementById('map_ID'), document.getElementById('img_ID'));
    //         imageMap.resize();
    //         return;
    //     }
    // },[]); 
        

    return (
        <>
        <div style={{alignItems: 'center'}}>
        {showMap &&
            <div className={classes.Header}>
                <h3>The most relevant experiences in my professional career</h3>
                <h5>To see all, please check my <a href="https://linkedin.com/in/felipealisboa" rel="noopener noreferrer" target="_blank"><strong>Linkedin profile</strong></a></h5>
                <h6>There you can find my academic experience, too!!</h6>
            </div>
        }
            <div className={classes.Rio}>
                <Button variant='success'>RJ</Button>
            </div>
            <div className={classes.Floripa}>
                <Button variant='success'>SC</Button>
            </div>
            <div className={classes.Lisbon}>
                <Button variant='success'>LX</Button>
            </div>
            <div className={classes.Spain}>
                <Button variant='success'>CAT</Button>
            </div>
        {/* <hr />
        <hr />
        <div className={classes.Map}>
            <map name="map" id="mapID" >
                <div className={classes.Area}>
                <area alt="rio" shape="poly" coords="447,817,509,817,479,746" onClick={openRio} />
                    {showRioComponent && <Rio />}
                <area alt="floripa" shape="poly" coords="383,902,443,903,418,837" onClick={openFloripa} />
                    {showFloripaComponent && <Floripa />}
                <area alt="spain" shape="poly" coords="780,86,866,112,800,169" onClick={openSpain} />
                    {showSpainComponent && <Spain />}
                <area alt="lisbon" shape="poly" coords="696,165,775,164,745,75" onClick={openLisbon} />
                    {showLisbonComponent && <Lisbon />}
                </div>
            </map>
            <div>
            {showMap ? 
                <img 
                    id="img_ID"
                    src={map} 
                    alt="world experience"
                    useMap="#map" /> :
                <Button 
                    style={{textAlign: 'center'}}
                    variant="outline-dark" 
                    onClick={openMap}>
                        Show the map again!!
                </Button> 
            } */}
            </div>
        {/* </div>
        </div> */}
        </>
    );
};

export default Map;