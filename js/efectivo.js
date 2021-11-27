function evaluar(){


    var empre=document.getElementById("empre").value;
    var ser=document.getElementById("ser").value;
    var cod=document.getElementById("cod").value;
    var paga=document.getElementById("paga").value;

    var exempre=(/^[a-zA-Z\s]+$/);
    var exser=(/^[a-zA-Z\s]+$/);
    var excod=(/[0-9]{5}$/);
    var paga=50;

    if(!exempre.test(empre)){
        alert(" Nombre de empresa no validos");
        
    }
     
     else{
       alert("Nombre de empresa Valida");
     }




     if(!exser.test(ser)){
        alert(" Nombre del servicio no validos");
        
    }
     
     else{
       alert("Servicio Valido");
     }




     if(!excod.test(cod)){
        alert(" Codigo no validos");
        
    }
     
     else{
       alert("Codigo Valido");
     }


     if(!paga){
        alert(" Paga no valia");
        
    }
     
     else{
       alert("Monto apagar correcto");
     }
        

}