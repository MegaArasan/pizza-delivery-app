import { useState } from "react";
import { Button, Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export function Pizza({ pizza }) {
  const [quantity, setquantity] = useState();
  const [varient, setvarient] = useState();

  const addtocart = () => {};
  return (
    <Card sx={{ minWidth: "350px", height: "100%", padding: "15px" }}>
      <h2>{pizza.name}</h2>
      <div className="text-center">
        <div className="img-container">
          <img
            src={pizza.image}
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
            alt={pizza.name}
          />
        </div>
        <div className="flex-container">
          <div className="varients">
            {/* <Typography varient="h6">Varients : </Typography> */}
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select">varient</InputLabel>
              <Select
                id="demo-simple-select"
                value={varient}
                // label="varient"
                onChange={(e) => {
                  setvarient(e.target.value);
                }}
              >
                {pizza.varients.map((varient) => {
                  return <MenuItem value={varient}>{varient}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>

          <div className="quantity">
            {/* <Typography varient="h6">Quantity : </Typography> */}
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select">Quantity</InputLabel>
              <Select
                // label="Quantity"
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(10).keys()].map((x, i) => {
                  return <MenuItem value={i + 1}>{i + 1}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex-container">
          <Typography variant="h5">
            Price: {pizza.prices[0][varient] * quantity} Rs/-
          </Typography>
          <Button variant="contained" onClick={addtocart}>Add to Cart</Button>
        </div>
      </div>
    </Card>
  );
}
