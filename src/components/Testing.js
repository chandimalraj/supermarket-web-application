import React, { useEffect } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { useState } from "react";

export default function Testing() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => console.error(error)
      );
    } else {
      console.log("Not Available");
    }
  }, []);

  const center = {
    lat: 6.9271,
    lng: 79.8612,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC9YA_kohXV6AKVocE3rCaoY-34IqlKV-w",
  });

  const markers = [
    {
      id: 1,
      position: { lat: 6.9271, lng: 79.8612 },
    },
    {
      id: 2,
      position: { lat: 7.957, lng: 80.7603 },
    },
    {
      id: 3,
      position: { lat: 6.8768, lng: 81.0608 },
    },
    {
      id: 4,
      position: { lat: 6.0187, lng: 0.2394 },
    },
    {
      id: 5,
      position: { lat: 6.781790858643255, lng: 81.01646865947944 },
    },
    {
      id: 6,
      position: { lat: 7.293587710691421, lng: 80.6413357264653 },
    },
  ];

  return isLoaded ? (
    <div className="flex flex-col justify-center items-center">
      <div className="">Enter your dilivery location</div>
      <GoogleMap
        center={center}
        zoom={8}
        mapContainerStyle={{ width: "500px", height: "500px" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          
        }}
      >
        {/* {markers.map(({ id, name, position }) => (
    <Marker
    key={id}
    position={position}
    >
    </Marker>
))} */}

<Marker
        position={{ lat: location.latitude, lng: location.longitude }}
        draggable={true}
        onDragEnd={(e) => {
          setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        }}
      />
</GoogleMap>

<button className="" onClick={()=>{
  console.log(location)
}}>submit location</button>
    </div>
  ) : (
    <></>
  );}
