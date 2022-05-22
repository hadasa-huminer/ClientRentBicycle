import * as Yup from "yup";

const CreditSchema = Yup.object().shape({
  expiryDate: Yup.string()
    .typeError("Not a valid expiration date. Example: MM/YY")
    .max(5, "Not a valid expiration date. Example: MM/YY")
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      "Not a valid expiration date. Example: MM/YY"
    )
    .required("Required"),
  cvv: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(3, "Too short"),
  // CardNumber: Yup.string()
  //     .test('test-number',
  //         'Credit Card number is invalid',
  //         value => valid.number(value).isValid)
  //     .required('Required')
});
export default CreditSchema;
