// DB
const { clientQuery } = require("../db/connectDB.js");

/*
Method: GET
Desc: Get All Restaurants
Url: '/api/v1/restaurants'
Access: PUBLIC
*/
const getAllRestaurants = async (req, res) => {
  try {
    const result = await clientQuery("SELECT * FROM restaurants");
    res.status(200).json({
      result: result.rows,
    });
  } catch (error) {
    console.log(error?.message);
    const errorMsg = error?.message || "Something went wrong!";
    res.status(500).json(errorMsg);
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

  try {
    const result = await clientQuery(
      "SELECT * FROM restaurants WHERE id = $1",
      [id]
    );

    if (!result || result.rows.length <= 0) {
      return res.status(404).json({
        result: "Restaurant not exists!",
      });
    }

    res.status(200).json({
      result: result?.rows[0],
    });
  } catch (error) {
    console.log(error?.message);
    const errorMsg = error?.message || "Something went wrong!";
    res.status(500).json(errorMsg);
  }
};

/*
Method: POST
Desc: Add New Restaurant (Only Auth User)
Url: '/api/v1/restaurants'
Access: PRIVATE - AUTHENTICATE USER ONLY
*/
const createRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;

  if (!name || !location || !price_range) {
    return res.status(400).json({ msg: "All values required!" });
  }

  try {
    await clientQuery(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3)",
      [name, location, price_range]
    );
    res.status(201).json({ msg: "New restaurant created!" });
  } catch (error) {
    console.log(error?.message);
    const errorMsg = error?.message || "Something went wrong!";
    res.status(500).json(errorMsg);
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
  const { name, location, price_range } = req.body;

  if (!id) {
    return res.status(400).json({ msg: "ID restaurant required!" });
  }

  if (!name || !location || !price_range) {
    return res.status(400).json({ msg: "All values required!" });
  }

  try {
    await clientQuery(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id=$4",
      [name, location, price_range, id]
    );
    res.status(200).json({ msg: "Restaurant updated!" });
  } catch (error) {
    console.log(error?.message);
    const errorMsg = error?.message || "Something went wrong!";
    res.status(500).json(errorMsg);
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

  if (!id) {
    return res.status(400).json({ msg: "ID restaurant required!" });
  }

  try {
    await clientQuery("DELETE FROM restaurants WHERE id=$1", [id]);
    res.status(200).json({ msg: "Restaurant deleted!" });
  } catch (error) {
    console.log(error?.message);
    const errorMsg = error?.message || "Something went wrong!";
    res.status(500).json(errorMsg);
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurantByID,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
