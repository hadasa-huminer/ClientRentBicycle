import * as Yup from "yup";

const PersonalSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  // date: date()
  //     .min(Yup.ref('dateSale'))('Too short')
  //     .max(new Date())('Too Long')
  //     .required('Required'),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
});
export default PersonalSchema;
