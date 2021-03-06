const express = require("express")
const app = express()

const index = require("./routes/index")
const lista = require("./routes/listaRoute")

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/lista", lista)

module.exports = app