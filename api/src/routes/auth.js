const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  userGet,
} = require("../controllers/authController");
const {
  validatorRegisterUser,
  validatorLoginUser,
} = require("../validators/authValidator");
router.get("/", userGet);
router.post("/register", validatorRegisterUser, userRegister);
router.post("/login", validatorLoginUser, userLogin);
module.exports = router;
