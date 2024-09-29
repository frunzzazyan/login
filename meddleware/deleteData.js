const fs = require("fs")
function deleteData(req,res,next){
    const {products} = res.locals
    const {id} = req.params
    let newProducts = products.filter(elem=>elem.id != id)
    if(newProducts){
        res.locals.products = newProducts
        fs.promises.unlink("./db/products.json")
        fs.promises.writeFile("./db/products.json" , JSON.stringify(newProducts))
        next()   
    }else(
        res.status(404).json({"msg" : "error"})
    )
}

module.exports = deleteData