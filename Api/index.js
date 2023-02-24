const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routeproduct=require("./Product/productRoute")
const app = express();
app.use(cors({ origin: "http://localhost:4200" }));

app.use(express.json());


app.use("/api/product", routeproduct);


MongoDB = "mongodb://localhost:27017/LeeYetMachineTest";

mongoose
  .connect(MongoDB, { useNewUrlParser: true })
  .then(() => app.listen(3000))
  .then(() =>
    console.log("connected to Database and listening to localhost 3000")
  )
  .catch((err) => console.log(err));
