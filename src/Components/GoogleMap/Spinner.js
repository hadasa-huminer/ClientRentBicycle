import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from "./MyMapComponent";
import ErrorComponent from "./ErrorComponent";

const render = (status) => {
  if (status === Status.FAILURE) return <ErrorComponent />;
  return <Spinner />;
};

const Spinner = () => (
  <Wrapper apiKey={
      "AIzaSyClipRWfdUp-_0e1s5kjNNUdSFT7b9Pio8"
      } render={render}>
    <MyMapComponent />
  </Wrapper>
);
export default Spinner;