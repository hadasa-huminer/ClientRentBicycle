import { Route, Routes, Link, Switch } from "react-router-dom";
import DesignRegister from "./Components/SignIn/DesignRegister";
import Login from "./Components/SignIn/Login";
import HomePage from "./Components/HomePage";
import  MyContainer from './Components/GoogleMap/MyMap'
const Router = () => {
  return (
    <Routes>
      <Route path="/DesignRegister" element={<DesignRegister />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<MyContainer />} />
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
