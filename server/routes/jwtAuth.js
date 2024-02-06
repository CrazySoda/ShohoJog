const router = require("express").Router();
const pool = require("../database/db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const authorization = require("../middleware/authorization");
//registering

router.post("/register", validInfo, async (req, res) => {
  try {
    //1. destructure the req.body(name, email, password)
    const {
      first_name,
      middle_name,
      last_name,
      user_name,
      user_password,
      contact_no,
      e_mail,
      location_pst_code,
      user_type,
    } = req.body;
    //2. check if user exists (if user exists then throw error)
    const user = await pool.query("SELECT * FROM users WHERE e_mail = $1", [
      e_mail,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("User Already Exists");
    }
    //3. bcrypt the user password
    const j = {hi};
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(user_password, salt);

    //4. enter the new user inside our database
    let newUser = await pool.query(
      "INSERT INTO users (first_name,middle_name,last_name,user_name,user_password,contact_no,e_mail,location_pst_code,user_type) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        first_name,
        middle_name,
        last_name,
        user_name,
        bcryptPassword,
        contact_no,
        e_mail,
        location_pst_code,
        user_type,
      ]
    );
    //5. generate our jwt token
    const jwtToken = jwtGenerator(newUser.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//login route
router.post("/login", validInfo, async (req, res) => {
  try {
    //1.Destructure the req body
    const { e_mail, user_password } = req.body;
    //2. Check if user doesn't exist(if not then throw error)
    const user = await pool.query("SELECT * FROM users WHERE e_mail = $1", [
      e_mail,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    }
    //3.check if incoming password is the same as the database password
    const validPassword = await bcrypt.compare(
      user_password,
      user.rows[0].user_password
    );
    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }
    //4.give them the jwt token
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
