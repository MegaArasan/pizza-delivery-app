import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export function Cart() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="cart-page">
      <div className="cart-head">
        <Typography variant="h2">My Cart</Typography>
        <hr />
      </div>
      <div className="total">
        <Typography variant="h2">Total:</Typography>
        <Button variant="contained" color="warning" onClick={handleClickOpen}>
          Pay Naow
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <div>
              <Typography variant="h2">Razor Pay</Typography>
            </div>
          </DialogTitle>
          <DialogContent>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              id="phoneno"
              name="phone"
              required
              label="User Name"
              sx={{ margin: "4px" }}
              variant="outlined"
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              id="name"
              name="Name"
              required
              label="Password"
              sx={{ margin: "4px" }}
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Proceed</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
