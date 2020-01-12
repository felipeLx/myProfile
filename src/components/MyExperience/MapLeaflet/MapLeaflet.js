import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import worldmap from '../../../assets/images/myexp.png';

const rjPosition = [22.9068, 43.1729];
const scPosition = [27.5949, 48.5482];
const lxPosition = [38.7223, 9.1393];
const spPosition = [41.3851, 2.1734];

const MapLeaflet = () => {

    const rjExperience = () => {
        console.log('rj exp');
    };

    const scExperience = () => {
        console.log('sc exp');
    };

    const lxExperience = () => {
        console.log('lx exp');
    };

    const spExperience = () => {
        console.log('sp exp');
    };

  return (
    <Map
      center={rjPosition}
      zoom={6}
      maxZoom={10}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker position={rjPosition}>
        <Popup>
          {rjExperience}
        </Popup>
      </Marker>
     {/*  <Marker position={scPosition}>
        <Popup>
          {scExperience}
        </Popup>
      </Marker>
      <Marker position={lxPosition}>
        <Popup>
          {lxExperience}
        </Popup>
      </Marker>
      <Marker position={spPosition}>
        <Popup>
          {spExperience}
        </Popup>
      </Marker> */}
    </Map>
  )
};

export default MapLeaflet;