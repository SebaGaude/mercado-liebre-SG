const express = require('express');
const app = express(); 
const router = express.Router();
const productosController = require('../controllers/productosController.js')

router.get("/", productosController.principal);

router.get("/:id", productosController.detalle);

router.get("/:id/comentarios", productosController.comentarios);

router.get("/:id/comentarios/:idComentario?", productosController.detalleComentarios);

module.exports = router;