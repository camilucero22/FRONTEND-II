const intereses = ["Diseño web", "Videojuegos", "Realidad virtual"];
//lista o array de elementos 

console.log(intereses);

const amigo1 = "Juan";
const amigo2 = "Julia";
const amigo3 = "Rocio";

let amigos = ["Juan", "Julia", "Rocio", "Delfi", "Lauti"];


console.log(amigos[0]); 
console.log(amigos.length); //cantidad
console.log("Primer elemento de la lista "  + amigos [0]); //primer elemento
console.log("Primer elemento de la lista "  + amigos [amigos.length-1]); // último elemento 
/*
0: Juan 
1: Julia 
2: Rocio
*/

//pagination --> determinar cuantos aparecen en el espacio de la página
// recorre = iterar la lista 
// bucle for para recorer lista 


for (let i = 0; i < amigos.length; i++){
  console.log("Mi amigo " + i); 
  console.log(amigos[i]);
  /*
  let --> variable i (index) = 0
  i < amigos.length --> mientras i sea menor a su longitud 
  i++ --> i = i + 1 
  */
  console.log(`Posicion ${i}, Amigo ${amigos[i]}`)
}

for (const amigo of amigos){
  console.log(`Mi amigo: ${amigo}`)
}

let frutas = ["Pera", "Manzna", "Banana"]; 
for (const fruta of frutas) {
  console.log(`Mis frutas `)

}
frutas.push ("Frutilla"); 




































// TODO 1: mostrar el primer elemento.
// TODO 2: mostrar el último elemento usando length.

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

  // TODO 10: leer el input y quitar espacios sobrantes.
  // TODO 11: validar que el texto no esté vacío.
  // TODO 12: agregar el interés mediante push().
  // TODO 13: actualizar la lista y reiniciar el formulario.
});

botonEliminar.addEventListener("click", () => {
  // TODO 14: comprobar que existan intereses.
  // TODO 15: eliminar el último con pop() y actualizar la lista.
});

mostrarIntereses();
