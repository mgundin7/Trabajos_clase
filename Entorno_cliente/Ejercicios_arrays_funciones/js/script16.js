let autos = [
    "BMW, Serie 3, 2012, 30000, 4, Blanco, automatico",
    "Audi, A4, 2002, 430000, 4, Azul, manual",
    "BMW, Serie 5, 2002, 45000, 4, Blanco, automatico",
    "Ford, Mustang, 2012, 30000, 4, Azul, manual",
    "Audi, A3, 2008, 45000, 4, Blanco,automatico",
    "Dodge, Challenger, 2012, 25000, 2, Rojo, manual",
    "Ford, Mustang, 2022, 130000, 4, Azul, automatico",
    "BMW, Serie 3,2012,1000, 4, Rojo, automatico",
    "Dodge, Challenger, 2009, 5000, 2, Blanco, manual"
];


// a) Imprimeix tots els cotxes fent servir for i forEach

console.log("Tots els cotxes amb FOR:");

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

console.log("Tots els cotxes amb forEach:");

autos.forEach(function(auto) {
    console.log(auto);
});


// b) Imprimeix només les marques i els models amb map

let marquesModels = autos.map(function(auto) {
    let dades = auto.split(",");
    return dades[0].trim() + " " + dades[1].trim();
});

console.log("Marques i models:");
console.log(marquesModels);


// c) Imprimeix tots els cotxes de color Blanc amb filter

let cotxesBlancs = autos.filter(function(auto) {
    let dades = auto.split(",");
    return dades[5].trim() === "Blanco";
});

console.log("Cotxes de color Blanc:");
console.log(cotxesBlancs);


// d) Imprimeix tots els cotxes de l'any 2012 amb filter

let cotxes2012 = autos.filter(function(auto) {
    let dades = auto.split(",");
    return dades[2].trim() === "2012";
});

console.log("Cotxes de l'any 2012 amb filter:");
console.log(cotxes2012);


// d) Repetim l'operació amb map

let cotxes2012Map = autos.map(function(auto) {
    let dades = auto.split(",");

    if (dades[2].trim() === "2012") {
        return auto;
    }
});

console.log("Cotxes de l'any 2012 amb map:");
console.log(cotxes2012Map);


// e) Buscar si tenim cotxes Dodge i Seat amb some

let hiHaDodge = autos.some(function(auto) {
    let dades = auto.split(",");
    return dades[0].trim() === "Dodge";
});

let hiHaSeat = autos.some(function(auto) {
    let dades = auto.split(",");
    return dades[0].trim() === "Seat";
});

console.log("Hi ha cotxes Dodge:", hiHaDodge);
console.log("Hi ha cotxes Seat:", hiHaSeat);