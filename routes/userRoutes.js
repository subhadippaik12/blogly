const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userContoller");

//router object
const router = express.Router();

// GET ALL USERS || GET
router.get("https://blogly-backend.onrender.com//all-users", getAllUsers);

// CREATE USER || POST
router.post("https://blogly-backend.onrender.com//register", registerController);

//LOGIN || POST
router.post("https://blogly-backend.onrender.com//login", loginController);

module.exports = router;
