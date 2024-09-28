const fs = require("fs")
function updateData(req,res,next){
    const {users,newUser} = res.locals
    users.push(newUser)
    if(users && newUser){
        fs.promises.writeFile("./db/users.json", JSON.stringify(users))
        fs.promises.writeFile("./db/login.json", JSON.stringify({login : true}))
        next()
    }else{
        res.status(404).json({"msg" : "error"})
    }
}

module.exports = updateData