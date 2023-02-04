import React, { useEffect } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { useState } from "react";

export default function Testing() {

  const [location , setLocation] = useState({})

  useEffect(() => {
    
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => console.error(error)
      );
    } else {
      console.log("Not Available");
    }},
      [])
    
      
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
    <>
      <GoogleMap
        center={center}
        zoom={8}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {markers.map(({ id, name, position }) => (
    <Marker
    key={id}
    position={position}
    >
    </Marker>
))}


      </GoogleMap>
    </>
  ) : (
    <></>
  );
  // <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  //   <div className="block lg:hidden">
  //     <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
  //       <svg
  //         class="fill-current h-3 w-3"
  //         viewBox="0 0 20 20"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <title>Menu</title>
  //         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  //       </svg>
  //     </button>
  //   </div>

  //   <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
  //     <div class="text-sm lg:flex-grow">
  //       <a
  //         href="#responsive-header"
  //         class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  //       >
  //         Docs
  //       </a>
  //       <a
  //         href="#responsive-header"
  //         class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  //       >
  //         Examples
  //       </a>
  //       <a
  //         href="#responsive-header"
  //         class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
  //       >
  //         Blog
  //       </a>
  //     </div>
  //     <div>
  //       <a
  //         href="#"
  //         class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
  //       >
  //         Download
  //       </a>
  //     </div>
  //   </div>
  // </nav>
}
