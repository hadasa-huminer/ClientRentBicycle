import React, { useState, useEffect } from 'react';
import Http from "../../axios";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setRent} from '../../redux/action/userAction';
export function MapContainer(props) {
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    Http.get("/client")
      .then((res) => {
        locations = res.data
      })
      .catch((err) => { console.log(err) });
    navigator.geolocation.getCurrentPosition((position) => {
      let obj = { lat: position.coords.latitude, lng: position.coords.longitude };
      setCurrentLocation(obj);
    });
  }, []);

  const onClickMarker=(item)=>{
    dispatch(setRent({ bicycle_Id: item.id}));
    swal("You want to rent this bicycle?")
    .then(() => {
      navigate("/Renting");
    });
  }

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
      <Marker position={{lat:32.084932,lng:34.835226}} onClick ={onClickMarker}/>
      {locations.map((item) => (
        <Marker position={{ lat: item.lat, lng: item.lng }} onClick={onClickMarker(item)}/>
      ))}
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyClipRWfdUp-_0e1s5kjNNUdSFT7b9Pio8')
})(MapContainer)
