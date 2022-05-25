import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonalInfo from "./PersonalInfo";
import CreditCard from "./CreditCard";
import Home from "../../Components/HomePage";
import Http from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = ["Personal Information", "Payment details"];
function GetStepContent({ step }) {

  // const GlobalState = (state) => {
  //   setClientData({ ...state, clientData });
  //   console.log(clientData);
 

  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <CreditCard />;
    case 2:
      return <Home />;
    default:
      <p>Unknown step</p>;
  }
}

const theme = createTheme();

export default function Checkout() {

  const [activeStep, setActiveStep] = React.useState(0);
  const navigate=useNavigate();
  const user = useSelector((state) => state.user);
  if (activeStep === steps.length) {
    // const pass = clientData.password;
    // const mail = clientData.email;
    Http.post("/client/register", user)
      .then((res) => {
        console.log(res);
        navigate("/HomePage");

      })
      .catch((err) => {console.log(err)
      });
    }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            need to put logo
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Register
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  You have successfully registered
                </Typography>
                <Typography variant="subtitle1">
                  The details were saved in the system
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <GetStepContent step={activeStep} />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Register" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
