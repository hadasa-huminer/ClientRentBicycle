import { Route, Routes, Link, Switch } from "react-router-dom";
import DesignRegister from "./Components/SignIn/DesignRegister";
import Login from "./Components/SignIn/Login";
import HomePage from "./Components/HomePage";
const Router = () => {
  return (
    <Routes>
      <Route path="/DesignRegister" element={<DesignRegister />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
