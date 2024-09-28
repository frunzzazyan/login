const express = require("express")
const readProducts = require("../meddleware/readProducts")
const checkProductBody = require("../meddleware/checkProductBody")
const updateProducts = require("../meddleware/updateProducts")
const router = express.Router()

router.get("/", readProducts ,(req,res)=>{
    res.send(res.locals.users)
})

router.post("/", [readProducts, checkProductBody, updateProducts] ,(req,res)=>{
    res.send("okay")
})



module.exports = router