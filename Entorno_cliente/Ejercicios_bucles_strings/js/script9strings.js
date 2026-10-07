let frase = prompt("Escribe la frase que quieras: ");

console.log(frase);
console.log("Tu frase tiene: " + frase.length + " caracteres");
console.log("La ultima letra de tu frase es: " + frase[frase.length -1 ]);
let frasesinespacios = frase.replaceAll(" ", "");
console.log("tu frase tiene: " + frasesinespacios.length + " letras");
console.log("tu frase en mayusculas: " + frase.toUpperCase());