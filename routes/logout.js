const express = require("express")
const router = express.Router()
const fs = require("fs")

router.post("/", (req,res)=>{
    fs.promises.unlink("./db/login.json")
    .then(()=>{
        res.send("logout")
    })
    .catch(err=>{
        res.status(404).json({"msg" : "file not found"})
    })
})

module.exports = router