let numero_aleatorio = Math.floor(Math.random()*10) + 1;
let numero_usuario;
let intentos = 1;
while (numero_usuario != numero_aleatorio) {
    numero_usuario = parseInt(prompt(numero_aleatorio + "intenta adivinar el numeor que pienso"));
    if (numero_usuario != numero_aleatorio) {
        alert("Has fallado, vuelve a intentarlo");
        intentos++;
    }
}
alert("Has acertado en: " + intentos + " intentos");