const fs = require("fs")
function updateProducts(req,res,next){
    const {products,newObj} = res.locals
    products.push(newObj)
    if(products && newObj){
        fs.promises.writeFile("./db/products.json", JSON.stringify(products))
        next()
    }else{
        res.status(404).json({"msg" : "error"})
    }
}

module.exports = updateProducts