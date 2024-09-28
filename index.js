const express = require("express")
const app = express()
const port = 3003
const homeRouter = require("./routes/index.js")
const signinRouter = require("./routes/signin.js")
const loginRouter = require("./routes/login.js")
const logoutRouter = require("./routes/logout.js")
const productsRouter = require("./routes/products.js")

app.use(express.json())
app.use("/", homeRouter)
app.use("/signin", signinRouter)
app.use("/login", loginRouter)
app.use("/logout", logoutRouter)
app.use("/products", productsRouter)

app.listen(port, ()=>{
    console.log("server is running!!!")
})