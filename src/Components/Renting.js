// כפתור סיום
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Renting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const rent = useSelector((state) => state.rent);
  const cost = 0;
  Http.put("/bicycle/updateBicycleStatus", {
    params: {
      id: rent.bicycle_Id.id,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return(
  <>
    <h1> RB bless you to </h1>
    <button onClick = {()=>{navigate("/RoleOfCompany")}}>to the role of the company</button>
    <button onClick={()=>{navigate("/Payment")}}>to end the rent:)</button>
  </>);
};

export default Renting;
