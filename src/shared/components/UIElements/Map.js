import React, { useRef, useEffect } from 'react'; //useEffect imported to execute functions when certain user input changes

import './Map.css';

const Map = props => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
        const mMap = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        });
        new window.google.maps.Marker({position: center, map: mMap});

    }, [center, zoom]);

    return (
        <div ref={mapRef} className={`map ${props.className}`} style={props.style}>

        </div>
    );
};

export default Map;