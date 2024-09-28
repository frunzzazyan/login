function checkBody(req,res,next){
    const body = req.body
    const {users} = res.locals
    if("name" in body && "email" in body && "password" in body){
        let usersId = []
        users.forEach(elem => {
            usersId.push(elem.id)
        });
        const max = Math.max(...usersId)
        const newUser = {
            id : max + 1,
            name : body.name.trim()[0].toUpperCase() + body.name.trim().slice(1).toLowerCase(),
            email: body.email.trim(),
            password : body.password.trim()
        }
        const dublicateEmail = users.some(elem=>elem.email === newUser.email)
        console.log(newUser) 
        console.log(dublicateEmail) 
        if(!dublicateEmail){
            res.locals.newUser = newUser
            next()
        }else{
            res.status(404).json({"msg" : "invalid data"})
        }
    }
}

module.exports =checkBody  