# Actividad – Recomendador de libros

## Objetivo

Crear un recomendador de libros utilizando **JavaScript, condicionales, funciones y Materialize CSS**.

La aplicación debe recomendar un libro teniendo en cuenta:

- El género elegido.
- La edad.
- Si la persona prefiere un libro corto o largo.

## Función requerida

La solución debe incluir una función llamada:

```javascript
recomendarLibro(genero, edad, prefiereCorto)
```

La función debe analizar los datos recibidos, elegir un libro y devolver su nombre utilizando `return`.

## Tabla de recomendaciones

| Género | Menor + libro corto | Menor + libro largo | Mayor + libro corto | Mayor + libro largo |
|---|---|---|---|---|
| Ciencia ficción | Cuentos del futuro | El juego de Ender | Rubik | Dune |
| Misterio | Socorro 10 | Monstruos y fantasmas de acá nomás | El sabueso de los Baskerville | El nombre de la rosa |
| Fantasía | El príncipe feliz y otros cuentos | El Hobbit | El océano al final del camino | El Señor de los Anillos |

Se considera **menor** a una persona de menos de 18 años.

## Conceptos a utilizar

- `querySelector`
- ``
- `addEventListener`
- `.value`
- `.checked`
- `if`, `else if` y `else`
- `&&`
- `!`
- Funciones
- Parámetros
- `return`
- Modificación del DOM

## Resultado esperado

Al presionar **Recomendar libro**, se debe llamar a `recomendarLibro()` y mostrar en la tarjeta el libro que corresponda según las opciones ingresadas.
