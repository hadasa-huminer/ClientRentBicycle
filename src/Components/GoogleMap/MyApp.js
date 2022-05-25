import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Spinner from "./Spinner";
import ErrorComponent from "./ErrorComponent";
import MyMapComponent from "./MyMapComponent";

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return <ErrorComponent />;
    case Status.SUCCESS:
      return <MyMapComponent />;
  }
};

const MyApp = () => <Wrapper apiKey={
    "AIzaSyClipRWfdUp-_0e1s5kjNNUdSFT7b9Pio8"
} render={render} />;
export default MyApp;