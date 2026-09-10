
//lista o array de elementos 
let amigos = ["Juan", "Julia", "Rocio", "Delfi", "Lauti", "Cami"];

//console.log("Primer elemento de la lista: " + amigos[0]); //primer elemento 
//console.log("Cantidad de elementos: " + amigos.length); //cantidad
//console.log("Último elemento de la lista: "  + amigos [amigos.length-1]); //último elemento 

// recorre = iterar la lista 
// bucle for para recorer lista 

for (let i = 0; i < amigos.length; i++){
  //console.log("Mi amigo " + i); // i = posición o index  
  //console.log(amigos[i]); //elemento o nomnbre
  
  /*FOR COMO FUNCIONA
  let --> variable i (index) = 0 
  i < amigos.length --> mientras i sea menor a su longitud 
  i++ --> i = i + 1 
  Recorro la lista, empezando en 0, mientas sea menor a su 
  longitud, y voy sumando 1. */

}

let frutas = ["Pera", "Manzna", "Banana"]; 
for (const fruta of frutas) {
  //console.log(fruta)
}
frutas.push ("Frutilla"); 





























// ACTIVIDAD INTERESES 
// TODO 1: mostrar el primer elemento.
// TODO 2: mostrar el último elemento usando length.

let intereses = ["pelis", "leer"] //mi lista de intereses
  console.log (`Mi primer elemento es: ${intereses[0]}`)
  console.log (`Mi último elemento es: ${intereses[intereses.length-1]}`)


for (i=0; i < intereses.length; i++){
  console.log(intereses[i])
}

for (const interes of intereses){
  console.log(interes)
}

// TODO 3: recorrer los índices con for.
// TODO 4: recorrer los valores con for...of.

const formulario = document.querySelector("#formulario-interes");
const inputInteres = document.querySelector("#interes");
const lista = document.querySelector("#lista-intereses");
const contador = document.querySelector("#contador");
const mensaje = document.querySelector("#mensaje");
const botonEliminar = document.querySelector("#boton-eliminar");


function mostrarIntereses() {
  // TODO 5: crear una variable de texto vacía.
  // TODO 6: recorrer el array con forEach() y una función flecha.
  // TODO 7: construir un li de Materialize por cada interés.
  // TODO 8: incorporar el contenido en la lista.
  // TODO 9: actualizar el contador con length.
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const interesUsuario = inputInteres.value.trim(); 
    if (interesUsuario === ""){
      mensaje.textContent = "Los datos son invalidos"; 
      return
    }else
      intereses.push(interesUsuario); 
      mensaje.textContent ="Su interes ha sido agregado"

  // TODO 10: leer el input y quitar espacios sobrantes.
  // TODO 11: validar que el texto no esté vacío.
  // TODO 12: agregar el interés mediante push().
  // TODO 13: actualizar la lista y reiniciar el formulario.
});

botonEliminar.addEventListener("click", () => {
  // TODO 14: comprobar que existan intereses.
  // TODO 15: eliminar el último con pop() y actualizar la lista.
  // if ("no existen intereses"){
  //  } mensaje.textContent = "No hay intereses"
  // else 
  // intereses.pop(intereses.length-1)

});

mostrarIntereses();
