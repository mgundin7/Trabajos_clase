let frase = prompt("Escribe una frase:");
let palabra = prompt("Escribe una palabra:");

if (frase.includes(palabra)) {
    console.log("La palabra existe dentro de la frase");
} else {
    console.log("La palabra NO existe dentro de la frase");
}

let fraseSinAcentos = frase
    .replaceAll("á", "a")
    .replaceAll("à", "a")
    .replaceAll("é", "e")
    .replaceAll("è", "e")
    .replaceAll("í", "i")
    .replaceAll("ì", "i")
    .replaceAll("ó", "o")
    .replaceAll("ò", "o")
    .replaceAll("ú", "u")
    .replaceAll("ù", "u")
    .replaceAll("Á", "A")
    .replaceAll("À", "A")
    .replaceAll("É", "E")
    .replaceAll("È", "E")
    .replaceAll("Í", "I")
    .replaceAll("Ì", "I")
    .replaceAll("Ó", "O")
    .replaceAll("Ò", "O")
    .replaceAll("Ú", "U")
    .replaceAll("Ù", "U");

console.log("Frase sin acentos: " + fraseSinAcentos);

let fraseConGuiones = frase.replaceAll(" ", "-");

console.log("Frase con guiones: " + fraseConGuiones);

if (frase.includes("@")) {
    console.log("Es un correo electrónico");
} else {
    console.log("NO es un correo electrónico");
}

let primeraPalabra = frase.split(" ")[0];

let palabraAlReves = primeraPalabra.split("").reverse().join("");

if (primeraPalabra.toLowerCase() == palabraAlReves.toLowerCase()) {
    console.log("La primera palabra es palíndroma");
} else {
    console.log("La primera palabra NO es palíndroma");
}
