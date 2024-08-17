



//cambiar color de los div al hacer click

document.getElementById("div1").addEventListener("click", function(){
    this.style.backgroundColor = `black`;
});

document.getElementById("div2").addEventListener("click", function(){
    this.style.backgroundColor = `black`;
});

document.getElementById("div3").addEventListener("click", function(){
    this.style.backgroundColor = `black`;
});

document.getElementById("div4").addEventListener("click", function(){
    this.style.backgroundColor = `black`;
});



// cambiar color del div "key" segun la tecla preionada

document.addEventListener(`keydowm`, function(event) {

    const keyDiv = document.getElementById("key");

    if (event.key === `a`) {
        keyDiv.style.backgroundColor = `pink`;


    }  else if (event.key === `s`) {
        keyDiv.style.backgroundColor = `orange`;


    } else if (event.key === `d`) {
        keyDiv.style.backgroundColor = `ligthblue`;
        

    } else if (event.key === `q`) {
        createNewDiv(`purple`);


    } else if (event.key === `w`) {
        createNewDiv(`gray`);


    }else if (event.key === `e`){
        createNewDiv(`brown`);
    }
});





function createNewDiv(color) {
    const newDiv = document.createElement(`div`);
    newDiv.style.width = `200px`;
    newDiv.style.height = `200px`;
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}