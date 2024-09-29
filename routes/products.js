const express = require("express")
const readProducts = require("../meddleware/readProducts")
const checkProductBody = require("../meddleware/checkProductBody")
const updateProducts = require("../meddleware/updateProducts")
const putProduct = require("../meddleware/putProduct")
const checkLogin = require("../meddleware/checkLogin")
const deleteData = require("../meddleware/deleteData")
const router = express.Router()

router.get("/", readProducts ,(req,res)=>{
    res.send(res.locals.users)
})

router.post("/", [readProducts, checkProductBody,checkLogin ,updateProducts] ,(req,res)=>{
    res.send("okay")
})

router.put("/:id",[readProducts,checkProductBody,checkLogin,putProduct],(req,res)=>{
    res.send("put")
})

router.delete("/:id", [readProducts, checkLogin, deleteData], (req,res)=>{
    res.send("delete")
})

module.exports = router