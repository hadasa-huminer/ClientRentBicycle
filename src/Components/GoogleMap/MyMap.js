import React, { useState,useEffect } from 'react';
import Http from "../../axios";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
export function MapContainer(props){
  const [locations, setLocations] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null); 

    useEffect(()=>{
      Http.get("/client", {})
      .then((res) => {
        locations = res.data
      })
      .catch((err) => { console.log(err) });
      navigator.geolocation.getCurrentPosition((position) => {
        let obj = {lat: position.coords.latitude, lng: position.coords.longitude};
        setCurrentLocation(obj);
      });
    },[]);
  const mapStyles = {
  width: '100%',
  height: '100%',
};
const iconBicycle =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  return (
    currentLocation &&
    <Map
      google={props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={{ lat: currentLocation.lat, lng: currentLocation.lng }}
    >
      {locations.map((item) => (
          <Marker position={{ lat: item.lat, lng: item.lng }} />
        ))}
      {/* onClick={onClickMarker} onMouseover = {distance} */}
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyClipRWfdUp-_0e1s5kjNNUdSFT7b9Pio8')
})(MapContainer)
