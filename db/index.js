

const express = require ("express")


const app = express ()
app.use(express.json());
app.set("port", process.env. PORT || 8010) 





app.get("/",(req,res)=>{
    res.send("Bienvenido a mi API")
})
app.get("/api",(req,res)=>{
    res.send("Hola")
    
})
app.get('/traer',(req,res)=>{
    res.send('traer datos')
})
app.get("/user",(req,res)=>{
    console.log(req.body)
    res.json({
        
        // user: "CAR",
        // nombre: "Claudia Arellano Rojas"
        
    })
})
app.get("/actualizar",(req,res)=>{
    res.send('Actualizar datos')
})
app.get('/eliminar',(req,res)=>{
    res.send('Eliminar datos')
})

app.listen (app.get("port"),()=>{
    console.log("server running on port",app.get("port"))
})