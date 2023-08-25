var imagenes=["01","02","03","04","05","06"];
window.onload=inicio;
var actual =Math.floor(Math.random()*imagenes.length)-1;
var crono;

function inicio(){
    for (let k=0;k<imagenes.length;k++){
        document.querySelector("#ball").insertAdjacentHTML('beforeend',`<div class="ball" insert="${k}"></div>`);
        document.querySelectorAll(".ball")[k].onclick=acceder;
    }
    cambiarImagen();
    crono=setInterval(cambiarImagen,3000);
};

function acceder(){
    clearInterval(crono);
    let actual=this.getAttribute("insert");
    colorBall()
    actualizarImagen();
    crono=setInterval(cambiarImagen,3000);
}


function cambiarImagen(){
    actual++;
    if (actual>=imagenes.length){
        actual=0;
    }
    actualizarImagen();
    colorBall();
};


function actualizarImagen(){
    document.querySelector("#contenedor").innerHTML=`<img src="img/slider-${imagenes[actual]}.jpg">`;
 
}

function colorBall(){
    for(let k=0;k<imagenes.length;k++){
        document.querySelectorAll(".ball")[k].style.backgroundColor=null;
    }
    document.querySelectorAll(".ball")[actual].style.backgroundColor="orange";
}

