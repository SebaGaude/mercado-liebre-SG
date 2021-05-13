const path = require("path");
let productosController = {
    principal: function (req, res){
        res.send("Bienvenido a la pagina principal de productos")
    },
    detalle: function(req, res){
        res.send("Bienvenidos al detalle del producto " + req.params.id)
    },
    comentarios: function(req, res){
        res.send("Bienvenidos a los comentarios del producto " + req.params.id)
    },
    detalleComentarios: function(req, res){
        res.send("Bienvenidos al comentario " + req.params.idComentario + " del producto " + req.params.id)
    }
};

module.exports = productosController;