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
//Agregar evento a un elemento html 
document.getElementById("btnSaludar").addEventListener(
    "click", function(){
        console.log("¡Hola!");
    }
);

//Modificar el HTML a traves de un DOM 
document.getElementById("btnAgregar").addEventListener(
    "click", () => {
        //Obtener el element ul lista de html
        let lista = document.getElementById("lista"); 

        let nuevoItem = document.createElement("li");

        let totalItems = lista.childElementCount;

        
        nuevoItem.textContent = `Item ${totalItems + 1}`;

        lista.appendChild(nuevoItem);
    }
);



document.getElementById("btnAddword").addEventListener(
    "click", addPalabraLista

);

function addPalabraLista(){
    //Obtener el input del html
    let input = document.getElementById("txtEntrada");
    //Obtener el valor del input
    const texto = input.value.trim(); //trim quita los espacios por delante y por detras 
    //Transformar a mayusculas
    if (texto === "") {
        alert("ingrese una palabra");
        return; 
    }
    const textMayuscula = texto.toUpperCase();
    //Agregar Item a la lista
    let lista = document.getElementById("listPalabras"); 

    let nuevoItem = document.createElement("li");
      
    nuevoItem.textContent = textMayuscula;

    lista.appendChild(nuevoItem);
    //limpiar y establecer el foco
    input.value = "";
    input.focus();
}
