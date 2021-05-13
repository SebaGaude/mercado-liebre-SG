let express = require('express');
const app = express(); 

let router = express.Router();
const loginController = require('../controllers/loginController.js');

router.get("/", loginController.principal);




module.exports = router;