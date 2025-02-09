import express from "express";
import rotas from "./router";
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api", rotas);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
