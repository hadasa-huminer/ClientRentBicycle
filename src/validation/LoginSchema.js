import * as Yup from "yup";
//עושה בדיקה רק שלוחצים על ה- signin
//בעמוד creditCard לא עושה בכלל בדיקה
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
});
export default LoginSchema;
