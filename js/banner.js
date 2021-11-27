var x=0;
 function rotar (){
     var ima=["/Img/gif0.gif","/Img/gif.gif", "/Img/gif2.gif",];
     document.getElementById("baner").src=ima[x];
     x++;
     if(x>=ima.length) x=0;
     setTimeout(rotar,7500);
 }
 rotar()