import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';
import { Component } from 'react';
import {MapContainer} from './MapContainer';
class MyMap extends Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
              <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        );
    }
};
const mapStyles = {
    width: '100%',
    height: '100%',
  };
export {MyMap} ;
export default  GoogleApiWrapper({
    apiKey: 'AIzaSyClipRWfdUp-_0e1s5kjNNUdSFT7b9Pio8'
})(MapContainer);