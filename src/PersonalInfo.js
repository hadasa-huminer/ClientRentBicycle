import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { actionsStore } from './redux/actions/actions';
import { connect } from 'react-redux';
import {useState} from 'react';
import { Button } from '@mui/material';
import { CssBaseline } from '@mui/material';
function mapStateToProps(state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, null)(function PersonalInfo(props) {
 const submitPersonalInfo=(sub)=>{
   sub.preventDefault();
   props.cb(PersonalInfo)
 }
  const [PersonalInfo,setPersonalInfo] = useState({email:'',date:'',password:''})
  const { setUser, user } = props;
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
            onChange = {(val)=>{setPersonalInfo({...PersonalInfo,email:val.target.value})}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="dob"
            label="Date Of Birth"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange = {(val)=>{setPersonalInfo({...PersonalInfo,date:val.target.value})}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="password"
            label="Password"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            inputProps={{ pattern: "[a-z]{1,15}" }}
            defaultValue={user.password}
            onChange = {(val)=>{setPersonalInfo({...PersonalInfo,password:val.target.value})}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="Confirm"
            label="Confirm Password"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />         
        </Grid>
        <Button  sx={{ mt: 3, ml: 1 }}  variant="contained" onClick={submitPersonalInfo}>save details</Button>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
})