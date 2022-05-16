import * as Yup from 'yup';
//עושה בדיקה רק שלוחצים על ה- signin 
//בעמוד creditCard לא עושה בכלל בדיקה
const SignSchema = Yup.object()
    .shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        // date: date()
        //     .min(Yup.ref('dateSale'))('Too short')
        //     .max(new Date())('Too Long')
        //     .required('Required'),
        password: Yup.string()
            .required('Required')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        expiryDate: Yup.string()
            .typeError('Not a valid expiration date. Example: MM/YY')
            .max(5, 'Not a valid expiration date. Example: MM/YY')
            .matches(
                /([0-9]{2})\/([0-9]{2})/,
                'Not a valid expiration date. Example: MM/YY')
            .required('Required'),
        cvv: Yup.string()
            .required('Required')
            .min(3, 'Too short')
            .max(3, 'Too short')
        // CardNumber: Yup.string()
        //     .test('test-number',
        //         'Credit Card number is invalid',
        //         value => valid.number(value).isValid)
        //     .required('Required')
    });
export default SignSchema;