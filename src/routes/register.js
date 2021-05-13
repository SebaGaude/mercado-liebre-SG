let express = require('express');
const app = express(); 
let router = express.Router();
let registerController = require('../controllers/registerController.js')


router.get("/", registerController.principal);



module.exports = router;