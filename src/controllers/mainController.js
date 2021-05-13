const path = require("path");

let mainController = {

    principal: (req, res)=>{
        res.sendFile(path.resolve(__dirname, "../views/home.html"));
    }
};


module.exports = mainController;