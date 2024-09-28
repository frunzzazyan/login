const fs = require("fs")

function putProduct(req,res,next){
    const {id} = req.params
    const {products, newObj} = res.locals
    console.log(products)
    const filterProduct = products.find(elem=>elem.id == id)
    const idx = products.indexOf(filterProduct)
    products[idx] = {
        id : id,
        title: newObj.title,
        price: newObj.price,
        description: newObj.description,
        category: newObj.category,
        image: newObj.image,
        rating: {
            rate: newObj.rating.rate,
            count: newObj.rating.count
        }
    }
    fs.promises.unlink("./db/products.json")
    fs.promises.writeFile("./db/products.json", JSON.stringify(products))
    next()
}

module.exports = putProduct