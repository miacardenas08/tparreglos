//1
let colores = ["rojo", "verde","rosa", "azul", "violeta"];

//2
let primero = colores[0];
let ultimo = colores[colores.length-1];
console.log(primero);
console.log(ultimo);

//3
console.log("el tamaño del arreglo es " + colores.length);

//4
colores.push("naranja");
console.log(colores[colores.length-1]);

//5
colores.unshift("blanco");
console.log(colores[0]);

//6 
colores.pop();
console.log(colores);

//7
colores.shift();
console.log(colores);

//8
colores[1] = "marron";
console.log(colores);

