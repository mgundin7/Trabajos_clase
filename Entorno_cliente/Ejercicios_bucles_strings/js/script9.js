let moneda = prompt("¿Qué quieres convertir? Escribe 'dolares' o 'libras':");
let euros = Number(prompt("¿Cuántos euros quieres convertir?"));

switch (moneda) {
    case "dolares":
        alert(euros * 1.10 + " dólares");
        break;

    case "libras":
        alert(euros * 0.85 + " libras");
        break;

    default:
        alert("Moneda no válida");
}
