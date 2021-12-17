const path = require("path")//para rutear archivos
const morgan = require("morgan")

const express = require("express");//llamando al paquete express
const { dirname } = require("path");
const app = express();//convierto en funcion y la denomino app 
const mongoose = require("mongoose") //llamamos al package de a mongoDB


//conectamos con base de datos 
mongoose .connect("mongodb://localhost/crud-mongo")

    .then(db=>console.log("DB Conectado"))
    .catch(erro =>console.log(err))
//importar rutas
const indexRoutes = require("./routes/index")
//configurar acceso a la ruta
app.set('views', path.join(__dirname , 'views')) //coge la ruta del metodo dirname el cual le indica la servidor
app.set("view engine",'ejs')//usar las plantillas ejs para optimizar  codigo
//middleware que emite ver los datos de consola si hay algun error
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));//este metodo entiende los datos del html para q se guarde los datos 
//rutas
app.use("/",indexRoutes);

//crear mi servidor
app.listen(3000,()=>{
    console.log("servidor en puerto  3000")
})

