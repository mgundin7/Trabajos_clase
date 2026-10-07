let numero_par = parseInt(prompt());

for(let i = 0; i <= numero_par; i++){

    if (i%2==0) {
        console.log(i);
    }
    else if(i%2!=0 && i%2==0){
        console.log("Escribe un valor numerico");
    }
}