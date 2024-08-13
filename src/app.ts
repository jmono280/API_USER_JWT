import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes";
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
console.log(process.env.DATABASE_URL);

//const CONNECTION_URL = process.env.DATABASE_URL || "";
const CONNECTION_URL = process.env.DATABASE_URL || "";
const PORT = process.env.PORT || ""; // Define the PORT variable

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

app.use("/api", router);
// Middleware para manejar rutas no existentes
app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});
