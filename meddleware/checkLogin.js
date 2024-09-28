const fs = require("fs")

function checkLogin(req,res,next){
    fs.promises.readFile("./db/login.json", "utf-8")
    .then(data=>{
        let login = JSON.parse(data)
        if(login.login){
            next()
        }else{
            res.status(404).json({"msg" : "login ches exel"})
        }
        })
    .catch(err=>{
        res.status(404).json({"msg" : "login exi"})
    })    
}

module.exports = checkLogin