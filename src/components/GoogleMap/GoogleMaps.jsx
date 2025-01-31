"use client"
import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
    width: "59rem",
    height: "256px",
    borderRadius: "10px",
}

const GoogleMaps = () => {
    const [userLocation, setUserLocation] = useState(null)

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })



    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ lat: latitude, lng: longitude })
            }),
                (error) => {
                    console.error('Error fetching location', error);
                }

        } else {
            console.log('Geolocation is not supported by this browser.')
        }
    }, [])


    const customMarker = isLoaded ? {
        url: "/marker.png",
        scaledSize: new window.google.maps.Size(50, 50),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(25, 50),
    }
        : null;

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (
        <div>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={userLocation || { lat: 0, lng: 0 }}
                zoom={userLocation ? 15 : 2}
            >
                {userLocation && (
                    <Marker position={userLocation} icon={customMarker} />
                )}
            </GoogleMap>
        </div>
    )
}

export default GoogleMaps