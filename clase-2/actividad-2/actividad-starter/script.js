// 1. Presentar al autor o autora
const nombre = "Cami Lucero";
const botonPresentarme = document.querySelector("#boton-presentar");
const descripcion = document.querySelector("#descripcion");

botonPresentarme.addEventListener("click", function () {
    descripcion.textContent = "Mi nombre es " + nombre; //concatenación 
})

// 2. Al hacer clic en "Cambiar estilo", agregá o quitá la clase "destacada".

const cambiarEstilo = document.querySelector("#boton-estilo");
const tarjeta = document.querySelector(".tarjeta");

cambiarEstilo.addEventListener("click", function () {
    tarjeta.classList.toggle("destacada");
})

// 3. Contar Me gusta:cada clic debe aumentar el número que aparece en el botón.

const meGusta = document.querySelector("#boton-like");
let cantLikes = 0; //me deja volver a asignar 

meGusta.addEventListener("click", function () {
    cantLikes += 1;
    meGusta.textContent = `Me gusta (${cantLikes})`;
    //MeGusta (" + cantLikes + ")";
    //`MeGusta (${cantLikes})`; //template 
})

// 4. una vez implementado el contador, hacer que cambie el corazón entre ♥ y ♡. 
//conditional rendering = a partir de cierta condición cambia lo que se muestra 

let corazon = false;

meGusta.addEventListener("click", function () {

    // ! --> not (simbolo de cierre de exclamación)
    corazon = !corazon;
    //!true es falso 
    //!fasle es verdadero 

    if (corazon) {
        //pasa si es true 
        meGusta.textContent = "♥"

    } else {
        // pasa si es false 
        meGusta.textContent = "♡"
    }
})

// 5. ubicar el botón de like sobre margen derecho de la tarjeta.

tarjeta.style.position = "relative";   // convierte a tarjeta en el "contenedor de referencia"
meGusta.style.position = "absolute"

meGusta.style.top = "1.5rem";
meGusta.style.right = "1.5rem";


// 6. Cambiar titulo de la tarjeta 

const tituloTarjeta = document.querySelector("#titulo");
tituloTarjeta.textContent = "Mi tarjeta personalizada";

// 7. Agregar un botón que oculte y vuelva a mostrar la descripción.

const botonOcultar = document.querySelector("#boton-ocultar");
//const descripcion = document.querySelector("#descripcion"); 

// = asignar un valor a una variable
// == compara si dos valores son iguales cambiando el tipo si hace falta
// === compara de forma estricta el valor y el tipo de dato
/*
botonOcultar.addEventListener("click", function () {
    if (descripcion.style.display === "none") { // se muestra 
        descripcion.style.display = "block";
        botonOcultar.textContent = "Ocultar descripción"
    }
    else { //se oculta
        descripcion.style.display = "none";
        botonOcultar.textContent = "Mostar descripción";
    }
})
*/
//otra forma 
let descripcionVisible = true; 
botonOcultar.addEventListener("click",function(){

    descripcionVisible = !descripcionVisible; //false 
    if (descripcionVisible){
        botonOcultar.textContent = "Mostrar descripción";
        descripcion.classList.remove("oculto")

    }else{
        botonOcultar.textContent = "Ocultar descripción";
        descripcion.classList.add("oculto")
    }   
})


// 8. Personalizar colores, tipografía y contenido sin quitar las funciones pedidas.

document.body.style.backgroundColor = "#cddffd"
document.body.style.fontFamily = "SF Pro Display";

const todosBotones = document.querySelectorAll("button");
todosBotones.forEach(function (boton) {
    boton.style.backgroundColor = "#18005e";
});