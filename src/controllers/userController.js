const path = require("path");
let userController = {
    principal: (req, res)=>{
        res.sendFile(path.resolve(__dirname, "../views/home.html"));
    },    
    register: (req, res)=>{
        res.sendFile(path.resolve(__dirname, "../views/register.html"));
    },
    login:(req, res)=>{
        res.sendFile(path.resolve(__dirname, "../views/login.html"));
    }
};


module.exports = userController;