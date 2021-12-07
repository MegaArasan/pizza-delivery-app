import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PasswordIcon from "@mui/icons-material/Password";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export function Signup() {
  return (
    <div className="signuppage">
      <Card
        className="signup-logo"
        sx={{
          maxHeight: "700px",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <img
          src="https://www.kitchentreaty.com/wp-content/uploads/2017/02/how-to-make-heart-shaped-pizzas-featured-420x500.jpg"
          alt="signuplogo"
          className="signupimage"
        />
      </Card>
      <div className="signup">
        <form className="signup" action="/signup" method="POST">
          <Typography variant="p" sx={{ fontSize: "30px" }}>
            Create an Account
          </Typography>
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            It's quick and easy
          </Typography>
          <br />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            id="firstname"
            name="firstname"
            required
            label="First Name"
            sx={{ margin: "4px" }}
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            id="lastname"
            name="lastname"
            required
            label="Last Name"
            sx={{ margin: "4px" }}
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
            id="email"
            name="email"
            required
            label="Email"
            sx={{ margin: "4px" }}
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
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
                  <ContactPhoneIcon />{" "}
                </InputAdornment>
              ),
            }}
            id="phoneno"
            name="phoneno"
            required
            label="Phone No"
            sx={{ margin: "4px" }}
            variant="outlined"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
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

          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the terms and conditions as set out by the user agreement"
          />
          <Button
            sx={{ margin: "4px" }}
            variant="contained"
            // onClick={() => history.push("/")}
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}
