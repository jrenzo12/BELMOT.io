const express = require("express");
const router = express.Router();



// //ENVIO DE GET PRUEBA
// router.get('/',(req,res)=> {
//      res.send('buenos dias')
// }) 

// redireccionado al archivo ejs

const Task = require('../models/task')

//aqui se muestra los datos de la pagina principal
router.get('/',async(req,res)=> {//agrego el async para optimizar el llamado dle cuadro(Lista)de la pag. principal
  const tasks=await Task.find();//declaramos al constante task que va a permitir traer los datos de la bd.
  console.log(tasks)
 res.render('index',{tasks})//Aqui e spara que pinte la bd.
 })
// REGISTRO la logica que nos va a permitirt registrar los datosen la BD
router.post("/add",async(req,res)=>{
  const task = new Task(req.body)
  console.log(new Task(req.body));
  await task.save() //await opracion asincrona por un tiempo de procesamiento en la base de datos
  res.redirect("/");
})

//ACTUALIZA EL ESTATUS DEL LA ACTIVIDAD SI ES TRUE O FALSE
router.get('/estado/:id', async (req,res)=>{ //una mejor funcion para que la ejecucion sea mas rapida /// jalamos del formulario
  const {id} = req.params; // aqui obtenemos el id del req parametros (pagina)
  const task = await Task.findById(id); //esto permite identificar el id para actualizar la BD (BD)
  console.log(task);// imprimimos en consola
  task.status = !task.status;
  await task.save();
  res.redirect("/") // se redirecciona a la pagina inicial 
})

//SELECCIONAMOS EL DATO DE LA FILA PARA EDITAR
router.get('/edit/:id', async (req,res)=>{ //una mejor funcion para que la ejecucion sea mas rapida /// jalamos del formulario
  const {id} = req.params; // aqui obtenemos el id del req parametros (pagina)
  const task = await Task.findById(id); //esto permite identificar el id para actualizar la BD (BD)
  console.log(task);// imprimimos en consola
  res.render('edit',{  // aca invoco al formulario secundario donde voy a  editar los datos del registro seleccionado
      task
  });

});
//ACTUALIZA EL REGISTRO SELECCIONADO 
router.post('/edit/:id', async (req,res)=>{ //una mejor funcion para que la ejecucion sea mas rapida /// jalamos del formulario
  const {id} = req.params; // aqui obtenemos el id del req parametros (pagina)
  await Task.update({_id: id}, req.body); // se actualizar el registro a actualizar
  res.redirect("/") // se redirecciona a la pagina inicial 
});

//ELIMINAR REGISTRO los datos en la BD
router.get("/delete/:id",async(req,res)=>{
  const {id}= req.params; //aqui obtenemos el id del req parametros
  await Task.remove({_id:id})//busca y elimina el id
  res.redirect('/')//se redirecciona a la pagina inicial 
})


module.exports = router;
