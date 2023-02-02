import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Circle, Marker } from '@react-google-maps/api';


export const Map = ({

}) => {

    const center = {
        lat: 38.0332,
        lng: -78.5147
    };

    const circleOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.4,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.1,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
    }

    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY as string

    return (
        <div className='sticky top-0 border-b-2 border-gray-300 w-full'>
            <LoadScript
                googleMapsApiKey={apiKey}
            >
                <GoogleMap
                    mapContainerStyle={{                    //map size
                        width: '100vw',
                        height: '55vh'
                    }}
                    center={center}                     //center
                    zoom={17}
                >
                    <Circle
                        center={center}
                        radius={160}                    //160 m
                        options={circleOptions}
                    />
                </GoogleMap>
            </LoadScript>
        </div>

    )
}