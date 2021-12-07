import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./App.css";
import { Login } from "./components/Login.js";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import { Signup } from "./components/Signup.js";
import MenuIcon from "@mui/icons-material/Menu";
import { Pizzalist } from "./components/Pizzalist.js";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Cart } from "./components/Cart.js";

export default function App() {
  const [opened, setopened] = useState(false);
  const handleDrawerOpen = () => {
    setopened(true);
  };
  const handleDrawerClose = () => {
    setopened(false);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const history = useHistory();
  return (
    <div className="App">
      <AppBar
        color="inherit"
        sx={{ backgroundColor: "yellow" }}
        position="static"
      >
        <Toolbar variant="dense">
          <img
            src="https://thumbs.dreamstime.com/z/homemade-pizza-bright-yellow-background-concept-traditional-italian-food-close-up-copy-space-152762617.jpg"
            alt="pizza"
            className="logo"
          />
          <Typography variant="h4" sx={{ fontFamily: "Pacifico" }}>
            Mega's Pizza
          </Typography>
          <Button
            sx={{ ml: "auto", display: { xs: "none", sm: "block" } }}
            onClick={() => history.push("/")}
            variant="text"
          >
            Home
          </Button>
          <Button
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick={handleClickOpen}
            variant="text"
          >
            Contact us
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Contact</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To tell us the query, please enter your email address and your
                query here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                multiline
                label="Problem statement"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Send Query</Button>
            </DialogActions>
          </Dialog>
          <Button
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick={() => history.push("/cart")}
            variant="text"
          >
            cart
          </Button>
          <Button
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick={() => history.push("/login")}
            variant="text"
          >
            Login
          </Button>
          <Button
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick={() => history.push("/signup")}
            variant="text"
          >
            signup
          </Button>
          <IconButton
            sx={{ display: { xs: "block", sm: "none" }, ml: "auto" }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            sx={{
              width: "200px",
              height: "100%",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "200px",
                height: "100%",
                boxSizing: "border-box",
                backgroundColor: "#ffff00c4",
                color: "black",
                fontSize: "1em",
                fontFamily: "Pacifico",
              },
            }}
            anchor="right"
            open={opened}
          >
            <IconButton
              color="inherit"
              aria-label="close"
              component="span"
              onClick={handleDrawerClose}
              sx={{ ml: "auto" }}
            >
              <CloseIcon />
            </IconButton>
            <Button onClick={() => history.push("/")} variant="text">
              Home
            </Button>
            <Button onClick={handleClickOpen} variant="text">
              Contact us
            </Button>
            <Button onClick={() => history.push("/cart")} variant="text">
              cart
            </Button>
            <Button onClick={() => history.push("/login")} variant="text">
              Login
            </Button>
            <Button onClick={() => history.push("/signup")} variant="text">
              signup
            </Button>
          </Drawer>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Pizzalist />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}
