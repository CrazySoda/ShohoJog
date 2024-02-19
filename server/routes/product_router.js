const express = require('express');
const pool = require("../database/db");
const product_router = express.Router();
// publicRouter.get("/all_products")
//TO GET ALL PRODUCTS 
product_router.get("/all_products", async (req, res) => {
    try {
      const all_products = await pool.query("SELECT * FROM product where status = 'in stock'");
      res.json(all_products.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  //GET SINGLE PRODUCTS
  product_router.post("/getSingleProduct/:id", async (req, res) => {
    try {
      const {id} = req.params;
      const get_single_product = await pool.query(
        "SELECT * FROM product where product_id = $1",
        [id]
      );
      res.json(get_single_product.rows[0]);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
  module.exports = product_router;