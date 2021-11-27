var txtNom=document.getElementById("txtNom");
var txtDni=document.getElementById("txtDni");
var txtMail=document.getElementById("txtMail");
var txtTelef=document.getElementById("txtTelef");
var txtCono=document.getElementById("txtCono");
var txtAsunto=document.getElementById("txtAsunto");
var txtComen=document.getElementById("txtComen");
var btnEnviar=document.getElementById("btnEnviar");


function Registrar(){
    if(txtNom.value=="" || txtNom.value== null){
        swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
        txtNom.focus();
    }else if(txtDni.value=="" || txtDni.value== null){
        swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
        txtDni.focus();
    }else if(txtMail.value=="" || txtMail.value== null){
        swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
        txtMail.focus();
    }else if(txtTelef.value=="" || txtTelef.value== null){
        swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
        txtTelef.focus();
    }else if(txtCono.value=="" || txtCono.value== null){
        swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
        txtCono.focus();
    }else if(txtAsunto.value=="" || txtAsunto.value== null){
        swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;;
        txtAsunto.focus();
    }else if(txtComen.value=="" || txtComen.value== null){
        swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
        txtComen.focus();
    }else{
        swal("TODOS LOS DATOS SON VALIDOS","","success");
        
        var nom=txtNom.value;
        var dni=txtDni.value;
        var mail=txtMail.value;
        var telef=txtTelef.value;
        var cono=txtCono.value;
        var asunto=txtAsunto.value;
        var comen=txtComen.value;
        var db=database.ref("Registrar")
        var Registrar=db.push();
        Registrar.set({
            nombre: nom,
            dni: dni,
            mail: mail,
            telefono: telef,
            conociste: cono,
            asunto: asunto,
            comentarios: comen,
        });
        // si pones esto no se registra
        // window.location="Metodosdepago.html";
    }
    
}
btnEnviar.addEventListener("click",Registrar);




function pagar(){



        window.location="Metodosdepago.html" }


btnPagar.addEventListener("click",pagar);


// !txtNom.value=="" && !txtDni.value=="" && !txtMail.value=="" && !txtTelef.value=="" && !txtAsunto.value=="" && !txtComen.value==""