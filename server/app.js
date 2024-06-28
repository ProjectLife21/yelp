const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

// middlewares
app.use(express.json());

// Routers
const restaurantsRouter = require("./routers/restaurantsRouter.js");

// Restful API
app.use("/api/v1/restaurants", restaurantsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
