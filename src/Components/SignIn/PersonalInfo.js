
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { setUser } from "../../redux/action/userAction";
import PersonalSchema from "../../validation/PersonalSchema";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';


// import PersonalSchema from "../../validation/PersonalSchema";

function PersonalInfo(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: PersonalSchema,
    onSubmit: (values) => {
      dispatch(
        setUser({
          password: values.password,
          email: values.email,
          dateOfBirth: values.dob,
        })
      );
    },
  });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="email"
            label="Email"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={user.email}
            onChange={formik.handleChange}
            value={formik.values.eamil}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        {/* <ParentComponent>
          <p>adfhfvh</p>
          <button>juity</button>  
        </ParentComponent> */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="dob"
            label="Date Of Birth"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            format={"DD-MM-YYYY"}
            onChange={formik.handleChange}
            value={formik.values.dob}
            error={Boolean(formik.touched.dob && formik.errors.dob)}
            helperText={formik.touched.dob && formik.errors.dob}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="password"
            label="password"
            type =  "password"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            inputProps={{ pattern: "[a-z]{1,15}" }}
            defaultValue={user.password}
            onChange={formik.handleChange}
            value={formik.values.Password}
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Button
          sx={{ mt: 3, ml: 1 }}
          variant="contained"
          onClick={formik.handleSubmit}
        >
          save details
        </Button>
      </Grid>
    </React.Fragment>
  );
}
export default PersonalInfo;
