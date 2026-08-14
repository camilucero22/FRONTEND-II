// 1. Presentar al autor o autora
const nombre = "Cami Lucero"; 
const botonPresentarme = document.querySelector("#boton-presentar"); 
const descripcion = document.querySelector("#descripcion"); 

botonPresentarme.addEventListener("click", function(){
    descripcion.textContent = "Mi nombre es "+nombre+""
})

// 2. Al hacer clic en "Cambiar estilo", agregá o quitá la clase "destacada".

const cambiarEstilo = document.querySelector ("#boton-estilo"); 
const tarjeta = document.querySelector (".tarjeta");

cambiarEstilo.addEventListener("click", function(){
        tarjeta.classList.toggle("destacada");
})

// 3. Contar Me gusta:cada clic debe aumentar el número que aparece en el botón.

const meGusta = document.querySelector("#boton-like"); 
let cantLikes = 0; 

meGusta.addEventListener("click", function(){
    cantLikes +=1; 
    meGusta.textContent = "Me gusta ("+cantLikes+")"
})

// 4. una vez implementado el contador, hacer que cambie el corazón entre ♥ y ♡. 


// 5. ubicar el botón de like sobre margen derecho de la tarjeta.

tarjeta.style.position = "relative";   // convierte a tarjeta en el "contenedor de referencia"
meGusta.style.position = "absolute" 

meGusta.style.top = "1.5rem";
meGusta.style.right = "1.5rem";


// 6. Cambiar titulo de la tarjeta 

const tituloTarjeta = document.querySelector("#titulo"); 
tituloTarjeta.textContent = "Tarjeta nombre cambiado"

// 7. Agregar un botón que oculte y vuelva a mostrar la descripción.

const botonOcultar = document.querySelector("#boton-ocultar"); 
//const descripcion = document.querySelector("#descripcion"); 

// = asignar un valor a una variable
// == compara si dos valores son iguales cambiando el tipo si hace falta
// === compara de forma estricta el valor y el tipo de dato

botonOcultar.addEventListener("click", function(){
    if (descripcion.style.display == "none") { // se muestra 
        descripcion.style.display = "block"; 
        botonOcultar.textContent = "Ocultar descripción"
    }
    else { //se oculta
        descripcion.style.display = "none";
        botonOcultar.textContent = "Mostar descripción"; 
    }
})

// 8. Personalizar colores, tipografía y contenido sin quitar las funciones pedidas.


