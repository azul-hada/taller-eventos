let botonSaluda = document.getElementById("boton");

function botonSaludando(event){
    alert("Hola!");
    event.stopPropagation();
}



botonSaluda.addEventListener("click", botonSaludando);

/*...Parte cinco...*/

let div = document.getElementById("div");

function saludoDiv(){
    alert("Hola! soy el div");
}

div.addEventListener("click", saludoDiv);
