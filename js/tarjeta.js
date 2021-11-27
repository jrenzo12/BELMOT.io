
    var cboTarjeta=document.getElementById("cboTarjeta");
    var numeroTar=document.getElementById("numeroTar");
    var numeroSe=document.getElementById("numeroSe");
    var FechaEx=document.getElementById("FechaEx");
    var txtNombre=document.getElementById("txtNombre");
    var txtApellido=document.getElementById("txtApellido");
    var txtEmail=document.getElementById("txtEmail");
    var txtVerificacion=document.getElementById("txtVerificacion");
// ultimos 4 datos fijos
    var txtCitaHos=document.getElementById("txtCitaHos");
    var txtnumCita=document.getElementById("txtnumCita");
    var txtcobro=document.getElementById("txtcobro");
    var txtMonto=document.getElementById("txtMonto");

    function Registrar(){
        if(cboTarjeta.value=="" || cboTarjeta.value== null){
            swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
            cboTarjeta.focus();
        }else if(numeroTar.value=="" || numeroTar.value== null){
            swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
            numeroTar.focus();
        }else if(numeroSe.value=="" || numeroSe.value== null){
            swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
            numeroSe.focus();
        }else if(FechaEx.value=="" || FechaEx.value== null){
            swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
            FechaEx.focus();
        }else if(txtNombre.value=="" || txtNombre.value== null){
            swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
            txtNombre.focus();
        }else if(txtApellido.value=="" || txtApellido.value== null){
            swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;;
            txtApellido.focus();
        }else if(txtEmail.value=="" || txtEmail.value== null){
            swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
            txtEmail.focus();
        }else if(txtVerificacion.value=="" || txtVerificacion.value== null){
            swal("HEMOS DETECTADO DATOS ERRONES. " , "REVISA LOS DATOS INGRESADOR Y VUELVE A INTENTARLO (**NO SE ACEPTAN CAMPOS VACIOS**) " , "error");;
            txtVerificacion.focus();
        } else{
            swal("TODOS LOS DATOS SON VALIDOS","","success");
            
            var tar=cboTarjeta.value;
            var num=numeroTar.value;
            var numS=numeroSe.value;
            var fec=FechaEx.value;
            var nom=txtNombre.value;
            var ape=txtApellido.value;
            var ema=txtEmail.value;
            var ver=txtVerificacion.value;

            var hos=txtCitaHos.value;
            var numci=txtnumCita.value;
            var co=txtcobro.value;
            var mon=txtMonto.value;


            var db=database.ref("Registrar")
            var Registrar=db.push();
            Registrar.set({
                tarjeta: tar,
                numero_de_tarjeta: num,
                numero_de_seguridad: numS,
                Fecha: fec,
                Verificacion_De_Email: ver,
                Nombre: nom,
                Apellido: ape,
                Email: ema,
                

                Hospital: hos,
                id_de_cita: numci,
                Cobro: co,
                Monto_pagar: mon,
            });
            // si pones esto no se registra
            // window.location="Metodosdepago.html";
        }
        
    }
    tbnEnviar.addEventListener("click",Registrar);
    
    
function pagado(){



    window.location="PAGOrealizado__.html" 
}

tbnPagar.addEventListener("click",pagado);


var input = document.querySelector("#txtnumCita"),
btn = document.querySelector("#button");

btn.addEventListener("click", function() {
var MIN = 10000, MAX = 90000;
input.value = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
});



    
    
     