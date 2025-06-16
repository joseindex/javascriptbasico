// funcion apra mostrar un cuadro de dialogo emergente 
function mostrarMensaje(){
    alert("Hola mundo :) ");
}


// Variables
function imprimirVariables(){
    let nombre = "Rodrigo";
    let edad = 42;
    // Formato condicional de concatenar cadenas
    console.log("nombre: ", nombre)
    console.log("edad: ", edad)
    //Forma moderna de concatenar cadenas 
    console.log(`nombre:${nombre}, edad: ${edad}`)
    // otros tipos de impresion
    console.error("Error: 12345 ");
    console.warn("Advertencia: x x x");
}

function arreglos(){
    // Arreglos
    let frutas = ['manzana', 'pera', 'banana'];
    // Bucle
    for(let f of frutas){
        console.log(f)
    }
    // Condicionales
    if (frutas [1] === 'pera'){
        console.log("La segunda fruta es una pera");

    }else{
        console.log('No es una pera');
    }
}
document.getElementById("btnSaludar").addEventListener(
    "click", function(){
        console.log("¡Hola!");
    }
);