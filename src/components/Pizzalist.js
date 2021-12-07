import { Pizza } from "./Pizza.js";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export function Pizzalist() {
  const [pizzas, setpizzas] = useState([]);
  const API_URL = "https://pizza-delivary-app.herokuapp.com/pizzas";
  useEffect(() => {
    fetch(`${API_URL}`)
      .then((data) => data.json())
      .then((pizzas) => setpizzas(pizzas));
  }, []);

  return (
    <div className="pizzas-list">
      {pizzas && pizzas.length < 0 ? (
        <Loader />
      ) : (
        pizzas.map((pizza,index) => <Pizza pizza={pizza}key={index} />)
      )}
      {/* {pizzas.map((pizza) => (
        <Pizza pizza={pizza} />
      ))} */}
    </div>
  );
}
function Loader() {
  const [open] = useState(true);
  return (
    <div className="loading">
      <Backdrop
        sx={{ color: "black", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  );
}
