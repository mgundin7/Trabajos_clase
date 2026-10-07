const usuaris = [" maria ", "JOAN", "Pere", " lAIA", "julia "];

// 1. Funció tradicional
function netejaUsuaris(nom) {
    nom = nom.trim();
    nom = nom.toLowerCase();
    nom = nom.charAt(0).toUpperCase() + nom.slice(1);
    return nom;
}

console.log(netejaUsuaris(" maria "));

// 2. Funció anònima
const netejaUsuarisAnonima = function(nom) {
    nom = nom.trim();
    nom = nom.toLowerCase();
    nom = nom.charAt(0).toUpperCase() + nom.slice(1);
    return nom;
};

console.log(netejaUsuarisAnonima(" JOAN "));

// 2. Funció fletxa compacta
const netejaUsuarisFletxa = nom => 
    nom.trim().toLowerCase().charAt(0).toUpperCase() + nom.trim().toLowerCase().slice(1);

// 3. Utilitzem la funció fletxa amb map()
const usuarisNets = usuaris.map(netejaUsuarisFletxa);

// 4. Mostrem el resultat
console.log(usuarisNets);