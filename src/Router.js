import { Home } from "@mui/icons-material";
import { Route, Routes, Link, Switch } from "react-router-dom";
import DesignRegister from './DesignRegister';
import Login from './Login';
const Router = () => {
    return (
        <Routes>
            <Route path="/DesignRegister" element={<DesignRegister />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element = {<Home/>}/>
        </Routes>
    );
}

export default Router;
