const express = require("express")
const readFile = require("../meddleware/readFile")
const checkLoginBody = require("../meddleware/checkLoginBody")
const router = express.Router()

router.get("/", (req,res)=>{
    res.send("login page")
})

router.post("/", [readFile, checkLoginBody], (req,res)=>{
    res.send(req.body)
})

module.exports = router