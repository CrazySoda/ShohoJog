const express = require('express');
const pool = require("../database/db");
const customer_router = express.Router();
// publicRouter.get("/all_products")
customer_router.get("/get_seller/:id", async (req, res) => {
    try {
      const {id} = req.params;
      const get_customer = await pool.query(
        "SELECT * FROM seller where user_id = $1",
        [id]
      );
      res.json(get_customer.rows[0]);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = customer_router;