const express = require("express");
const restaurantsRouter = express.Router();

// controllers
const {
  getAllRestaunrants,
  getRestaurantByID,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantsController.js");

restaurantsRouter.route("/").get(getAllRestaunrants).post(createRestaurant);

restaurantsRouter
  .route("/:id")
  .get(getRestaurantByID)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

module.exports = restaurantsRouter;
