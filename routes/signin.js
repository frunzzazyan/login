const express = require("express")
const router = express.Router()
const readFile = require("../meddleware/readFile.js")
const checkBody = require("../meddleware/checkBody.js")
const updateData = require("../meddleware/updateData.js")


router.get("/",(req,res)=>{
    res.send("signin")
})

router.post("/", [readFile,checkBody,updateData], (req,res)=>{
    res.json(res.locals.newUser)
})

module.exports = router