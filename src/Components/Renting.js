// כפתור סיום
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import  {setRent}  from "../redux/action/userAction";
import Http from "../axios";

const Renting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const rent = useSelector((state) => state.rent);
  //התחברות לחברת גביה
  Http.put("/bicycle/updateBicycleStatus", {
    params: {
      id: rent.bicycle_Id
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  dispatch(setRent({ start_time: new Date().now().getHour() }));
  return (
    <>
      <h1> RB bless you to </h1>
      <button onClick={() => { navigate("/RoleOfCompany") }}>to the role of the company</button>
      <button onClick={() => {
        dispatch(setRent({ end_Time: new Date().now().getHour() }));
        navigate("/Payment")
      }}>to end the rent:)</button>
    </>);
};

export default Renting;
