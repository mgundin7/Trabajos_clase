const productes = [ 
    { nom: "Ratolí", preu: 15 }, 
    { nom: "Teclat", preu: 30 }, 
    { nom: "Monitor", preu: 120 }, 
    { nom: "Cable HDMI", preu: 10 } 
];

//function filtraCars() {
//const filtraCars = function() {
const filtraCars = () => {
    for (let producte of productes) {
        if (producte.preu >= 20) {
            console.log(producte.nom);
        }
    }
}
filtraCars();