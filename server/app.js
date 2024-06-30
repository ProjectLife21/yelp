const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

// db
const { connectDB } = require("./db/connectDB.js");

// middlewares
if (NODE_ENV == "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

// Routers
const restaurantsRouter = require("./routers/restaurantsRouter.js");

// Restful API
app.use("/api/v1/restaurants", restaurantsRouter);

const startServer = async () => {
  try {
    await connectDB().then(() => {
      console.log("Database is connected!");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
