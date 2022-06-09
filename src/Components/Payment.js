// שליפת id מהרידקס
// שליפת זמן נסיעה מהשרת
// התחברות לחברת אשראי
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Payment = () => {
    const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  Http.get("/bicycle", {
    params: {
      id: rent.bicycle_Id.id,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch(sentRent({stratTime: res.stratTime,endTime = res.endTime}));
    })
    .catch((err) => {
      console.log(err);
    });
  cost = (rent.endTime - rent.stratTime) * 30;
  return;
};

export default Payment;
