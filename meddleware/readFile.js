const fs = require("fs")

function readFile(req,res,next){
    fs.promises.readFile("./db/users.json", "utf-8").then(data=>{
        res.locals.users = JSON.parse(data)
        next()
    })
}

module.exports = readFile