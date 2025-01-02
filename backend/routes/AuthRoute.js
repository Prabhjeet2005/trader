const { SignUp } = require("../controllers/AuthController.Controller.js");
const { Login } = require("../controllers/AuthController.Controller.js");
const router = require("express").Router();

router.post("/signup", SignUp);
router.post("/login", Login);

module.exports = router;
