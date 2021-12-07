import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export function Login() {
  const history = useHistory();
  return (
    <div className="login-page">
      <div className="login-logo">
        <img
          src="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg"
          alt="login"
          className="loginimage"
        />
      </div>
      <div className="login">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Pacifico",
            justifyContent: "center",
            display: "flex",
          }}
        >
          LogIn
        </Typography>
        <form className="login" action="/login" method="POST">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              ),
            }}
            id="username"
            name="username"
            required
            label="User Name"
            sx={{ margin: "4px" }}
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
            id="password"
            name="password"
            required
            label="Password"
            sx={{ margin: "4px" }}
            variant="outlined"
          />
          <Button
            sx={{ margin: "4px" }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </form>
        <Typography>Don't have an account</Typography>
        <Button variant="text" onClick={() => history.push("/signup")}>
          signup
        </Button>
      </div>
    </div>
  );
}
