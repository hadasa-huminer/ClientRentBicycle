import { Wrapper } from "@googlemaps/react-wrapper";
import MyMapComponent from "./MyMapComponent";

const ErrorComponent = () => (
  <Wrapper apiKey={
      "AIzaSyClipRWfdUp-_0e1s5kjNNUdSFT7b9Pio8"
      }>
    <MyMapComponent />
  </Wrapper>
);
export default ErrorComponent;