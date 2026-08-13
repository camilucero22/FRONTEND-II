// Vamos a construir la interactividad paso a paso durante la clase.
console.log("hola blablablablahba"); //imprimir un texto o un resultado 
// log = impresion de mensaje 

const botonSaludoUsuario = document.querySelector("#boton-saludo");
// query = busquedda en el documento
// () aca va una clase o un id del css
//  <button id="boton-saludo" type="button">Mostrar saludo</button>


console.log(document.querySelector("#boton-saludo"))
console.log(botonSaludoUsuario);
// VARAIBALES: const
// 1er palabra en minisucula y 2da en mayusc --> cammel case 


const mensajeSaludoUsuario = document.querySelector("#mensaje");
//const variable (asignar --> =)

const nombre = "Cami"
const edad = 20

botonSaludoUsuario.addEventListener("click",function(){
    // function (parametros)
    // addEventListener input del usuario --> tipo click 
    console.log("El usuario presiona el boton mostrar saludo");
    mensajeSaludoUsuario.textContent = "Hola soy " + nombre + " y tengo " + edad;

})


const botonCambiarTema = document.querySelector("#boton-tema"); 

//callbacks = una función q llama a otra función --> tocar bo
botonCambiarTema.addEventListener("click", function(){
    console.log("El usuario presiona el boton cambiar tema")
    document.body.classList.toggle("tema-oscuro");
    //le agrego al body la clase tema-oscuro 
}) 


const botonLike = document.querySelector("#boton-like"); 
let numeroLikes = 0; 
//variable cambiante

botonLike.addEventListener("click",function(){
    numeroLikes = numeroLikes + 1;
    botonLike.textContent = "Me gusta ("+ numeroLikes +")"  
}); 
