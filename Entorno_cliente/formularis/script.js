formulariUsuari.addEventListener("submit", function(event) {

  event.preventDefault(); // Evita l'enviament automàtic

   let nom =  formulariUsuari.elements.nom.value.trim();

  let cognom = formulariUsuari.elements.cognom.value.trim();

  let edat = formulariUsuari.elements.edat.value.trim();

  let dni = formulariUsuari.elements.dni.value.trim();

  if (nom === "") { 

    alert("El campo nombre es obligatorio ⚠️"); 
    return;}

  if (cognom === "") { 
    
    alert("El campo apellido es obligatorio ⚠️"); 
    return;}

  if (edat === "") { 
    
    alert("El campo edad es obligatorio ⚠️"); 
    return;}

  if (dni === "") { 
    
    alert("El campo dni es obligatorio ⚠️"); 
    return;}


  alert("Formulari enviat correctament 🎉");

  formulariUsuari.reset(); // Neteja el formulari
  

});