const express = require("express")
const readProducts = require("../meddleware/readProducts")
const checkProductBody = require("../meddleware/checkProductBody")
const updateProducts = require("../meddleware/updateProducts")
const putProduct = require("../meddleware/putProduct")
const router = express.Router()

router.get("/", readProducts ,(req,res)=>{
    res.send(res.locals.users)
})

router.post("/", [readProducts, checkProductBody, updateProducts] ,(req,res)=>{
    res.send("okay")
})

router.put("/:id",[readProducts,checkProductBody,putProduct],(req,res)=>{
    res.send("put")
})

module.exports = router