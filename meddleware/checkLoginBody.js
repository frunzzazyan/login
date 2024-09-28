const fs = require("fs")
function checkLoginBody(req,res,next){
    const body = req.body
    const {users} = res.locals
    if("email" in body && "password" in body){
        console.log(body)
        const user = {
            email : body.email.trim(),
            password : body.password.trim()
        }
        console.log(user)
        const loginUser = users.some(elem=>{
            return elem.email === user.email && elem.password === user.password
        })
        console.log(loginUser)
        if(loginUser){
                fs.promises.writeFile("./db/login.json", JSON.stringify({login:true}))
        }else{
            res.status(404).json({"msg" : "user not found"})
        }
    }
}

module.exports = checkLoginBody