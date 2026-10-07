let productes = [ { nom: "Ratolí", preu: 20 }, { nom: "Teclat", preu: 35 }, { nom: "Monitor", preu: 150 } ];

console.log(productes.find(producte => producte.preu > 30));
console.log(productes.every(producte => producte.preu > 10));
console.log(productes.some(producte => producte.preu > 100));