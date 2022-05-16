import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import {useState} from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {setUser} from './redux/reducers/action'
import { useNavigate } from "react-router-dom"
import Http from './axios';
import SignSchema from './Validation';

export default function PaymentForm(props) {
  const user = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
        password: '',
        email: '',
    },
    validationSchema: SignSchema,     
    onSubmit: values => {    
        dispatch(setUser({num_of_credit:values.cardNumber,cvv:values.cvv,validity:values.expiryDate }))
        Http.post('/register', user)
        .then(res => {
              navigate("/Home")
      }).catch((err) => { 
         <p>cant connect </p> ;
      })
    },
});
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required 
            id="cardName"
            label="Name on card"
            name = "name"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.name}
            error = {Boolean(formik.touched.name && formik.errors.name)}
            helperText = {formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            name="cardNumber"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.cardNumber}
            error = {Boolean(formik.touched.CardNumber && formik.errors.CardNumber)}
            helperText = {formik.touched.CardNumber && formik.errors.CardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expiryDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.expiryDate}
            error = {Boolean(formik.touched.expiryDate && formik.errors.expiryDate)}
            helperText = {formik.touched.expiryDate && formik.errors.expiryDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.cvv}
            error = {Boolean(formik.touched.cvv && formik.errors.cvv)}
            helperText = {formik.touched.cvv && formik.errors.cvv}
          />
        </Grid>
        <Button sx={{mt:1,  ml: 48.9 }} variant="contained" onClick={formik.handleSubmit}>save details</Button>

      </Grid>
    </React.Fragment>
  );
}