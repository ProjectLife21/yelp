// DB
const { clientQuery } = require("../db/connectDB.js");

/*
Method: GET
Desc: Get All Restaurants
Url: '/api/v1/restaurants'
Access: PUBLIC
*/
const getAllRestaunrants = async (req, res) => {
  res.status(200).json({ msg: "Get all restaurants" });
  try {
  } catch (error) {
    console.error(error);
  }
};

/*
Method: GET
Desc: Get Restaurant By ID
Url: '/api/v1/restaurants/:id'
Access: PUBLIC
*/
const getRestaurantByID = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: "Get singel restaurant by ID: " + id });
  try {
  } catch (error) {
    console.error(error);
  }
};

/*
Method: POST
Desc: Add New Restaurant (Only Auth User)
Url: '/api/v1/restaurants'
Access: PRIVATE - AUTHENTICATE USER ONLY
*/
const createRestaurant = async (req, res) => {
  res.status(201).json({ msg: "Create new restaurant" });

  try {
  } catch (error) {
    console.error(error);
  }
};

/*
Method: PUT
Desc: Update Restaurant By ID
Url: '/api/v1/restaurants/:id'
Access: PRIVATE - AUTHENTICATE USER ONLY
*/
const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: "Update restaurant " + id });
  try {
  } catch (error) {
    console.error(error);
  }
};

/*
Method: DELETE
Desc: Delete Restaurant By ID
Url: '/api/v1/restaurants/:id'
Access: PRIVATE - AUTHENTICATE USER ONLY
*/
const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: "Delete restaurant: " + id });

  try {
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllRestaunrants,
  getRestaurantByID,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
