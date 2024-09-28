function checkProductBody(req,res,next){
    const body = req.body
    const {products} = res.locals
    if("title" in body && "price" in body && "description" in body && "category" in body && "image" in body && "rating" in body){
        if("rate" in body.rating && "count" in body.rating){
            let numId = []
            products.forEach(element => {
                numId.push(+element.id)
            });
            const max = Math.max(...numId)
            const newObj = {
                id: max+1,
                title: body.title.trim(),
                price: body.price,
                description: body.description.trim(),
                category: body.category.trim(),
                image: body.image.trim(),
                rating: {
                    rate: body.rating.rate,
                    count: body.rating.count
                }
            }
            res.locals.newObj = newObj
            next()
        }
    }else{
        res.status(404).json({"msg" : "invalid data"})
    }
}

module.exports = checkProductBody