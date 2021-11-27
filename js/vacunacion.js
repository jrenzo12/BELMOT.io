var x=0;
 function rotar (){
     var ima=["/Img/GIF-VACUNACION-1.gif","/Img/GIF-VACUNACION-2.gif"];
     document.getElementById("baner").src=ima[x];
     x++;
     if(x>=ima.length) x=0;
     setTimeout(rotar,7500);
 }
 rotar()