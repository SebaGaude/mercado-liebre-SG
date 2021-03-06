let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController.js')


router.get("/", userController.principal);
router.get("/register", userController.register);
router.get("/login", userController.login);

module.exports = router;