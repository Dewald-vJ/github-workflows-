const express = require ("express")
const application = express()


application.get("/dewald",(request,respons)=>{
    respons.send("My name is dewald and my endpoint is working.")

})

const expressServer = application.listen (3000,()=>{
    console.log("server running" )
    
})

module.exports = {application ,expressServer};

