let tasques = [
    { nom: "Fer deures", completada: true },
    { nom: "Estudiar Angular", completada: false },
    { nom: "Practicar JS", completada: true }
];

// Mostrar solo las tareas pendientes
tasques.forEach(function(tasca) {
    if (!tasca.completada) {
        console.log("Pendent:", tasca.nom);
    }
});

// Contar completadas y pendientes
let completades = 0;
let pendents = 0;

tasques.forEach(function(tasca) {
    if (tasca.completada) {
        completades++;
    } else {
        pendents++;
    }
});

console.log("Completades:", completades);
console.log("Pendents:", pendents);