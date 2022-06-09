// שליפת id מהרידקס
// שליפת זמן נסיעה מהשרת
// התחברות לחברת אשראי
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Payment = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cost = 0;
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
  cost = (rent.end_time - rent.start_time) * 30;
  //התחברות למערכת גביה.
  //-שליפה מרידקס עם נתוני הכטירס אשראי
  swal("Thank you", "bi!", "success");
  return;
};

export default Payment;
