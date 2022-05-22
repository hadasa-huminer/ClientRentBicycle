import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

const HomePage = () => {
const navigate=useNavigate();
    return (
        <>
        <Button
            type="submit"
            
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
                navigate("/Login")
            }}
        >
            Sign In
        </Button>
        </>
    );
}

export default HomePage;