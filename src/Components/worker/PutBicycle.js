import { Button } from "./node_modules/@mui/material";

const PutBicycle = () => {
  return (
    <Button
      sx={{ mt: 3, ml: 1 }}
      variant="contained"
      onClick={formik.handleSubmit}
    >
     Approval of bicycle placement
    </Button>
  );
};

export default PutBicycl;
