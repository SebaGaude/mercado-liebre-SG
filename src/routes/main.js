let express = require('express');
let router = express.Router();
const app = express(); 
const mainController = require('../controllers/mainController');


router.get("/", mainController.principal);



module.exports = router;