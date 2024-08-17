



//funcion original

function pintar() {

    ele.style.backgroundColor = `yellow`;
}


//modificacion para recibir ele elmento clikeado

function pintar(elemento) {

    elemento.style.backgroundColor = `yellow`;

}


const ele = document.getElementById("ele1");

ele.addEventListener("click", function() {

    pintar(ele);

} );






//modificacion para recibir un color como argumento

function pintar(elemento, color = `green`) {

    elemento.style.backgroundColor = color;

}

const elem = document.getElementById("elem");

elem.addEventListener("click", function(){

    pintar(elem, `yellow`);
});