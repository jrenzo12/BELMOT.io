function dentro(x){

    document.getElementsByClassName("img")[x].style.height="300px";
    document.getElementsByClassName("img")[x].style.width="400px";
    document.getElementsByClassName("img")[x].style.transition="all 2s";
    // document.getElementsByClassName("img")[x].style.width="380px";
    //  document.getElementsByClassName("img")[x].style.height="300px";
    // document.getElementsByClassName("img")[x].style.transition="all 2s";
    //       document.getElementsByClassName("img")[x].style.transform="rotate(-360deg)";
}

 function fuera(x){
  
    // var img=document.getElementsByClassName("img")[x];
    // img.style.height="210px";
    // img.style.width="290px";
    // img.style.transition="all 2";
    // document.getElementsByClassName("img")[x].style.transform="rotate(360deg)";
    
document.getElementsByClassName("img")[x].style.height="200px";
document.getElementsByClassName("img")[x].style.width="280px";
}


function encima(x){

    

    document.getElementsByClassName("ima2")[x].style.height="300px";
    document.getElementsByClassName("ima2")[x].style.width="400px";
    document.getElementsByClassName("ima2")[x].style.transition="all 2s";
    

}


function Noencima(x){

document.getElementsByClassName("ima2")[x].style.height="200px";
document.getElementsByClassName("ima2")[x].style.width="280px";
}


