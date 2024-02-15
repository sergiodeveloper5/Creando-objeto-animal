// Lista de animales
let animales = ["León", "Tigre", "Oso Panda", "Águila", "Delfín", "Cocodrilo", "Elefante", "Zorro", "Perro", "Gato"];

// Envía a la consola todos los valores del array
console.log(animales);

// Envía a la consola los elementos solicitados
console.log(animales[0]); // Primer elemento
console.log(animales[7]); // Octavo elemento
console.log(animales[8]); // Noveno elemento
// El elemento 11 no existe, esto dará undefined
console.log(animales[11]); 

// Realiza un cambio del elemento cinco del array
animales[5] = "Pipito feliz"; // Cambia Cocodrilo por Pipito feliz

// Añade un nuevo elemento al array
animales.push("Pipito triste");

// Comprueba el tipo del array
console.log(typeof animales); // Esto mostrará "object", ya que en JavaScript los arrays son objetos

// Muestra el tamaño del array en consola
console.log(animales.length);
