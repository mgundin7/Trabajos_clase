let pi = 3.14;
let a = 2;

let salutacio = "Hello world";

let flag = true;

let nada = null;

//Operador
let suma = pi + a;
let mult = pi * a;
let poten = pi**2;

console.log(poten);

console.log(typeof flag);

let num = "10";
console.log("La variable num es " + typeof num)
console.log(a + num);

let numero = parseInt(num);
console.log(a + numero);
console.log("La variable numero es " + typeof numero)

if(pi>4) {
    console.log("Pi es major de 4");
}
else if(pi>3.1 ){
    console.log("Pi no es major de 4");
}
else{
    console.log("Es mes petit o igual a 3.1")
}


let b = 2 + 2;

switch(b){

    case 1:
        console.log("Es igual a 1");
        break;
    case 2:
        console.log("Es igual a 2");
        break;
    case 3:
        console.log("Es igual a 3");
        break;
    case 4:
        console.log("Es igual a 4");
        break;

    default:
        console.log("No correspon a cap dels valors");
}

var vocal = (10>3)? 'a':'b';

console.log(vocal);

for (let k = 0; k<10; k++){
    if(k%2 == 0 && k > 0){
    console.log(k);}
}


for (let k = 0; k < 5; k++){
    if (k == 1){
        continue;
        console.log(k);
    }
    else{
        console.log(`aixo es la k: ${k}`);
    }
}
console.log("BREAK");
for (let k = 0; k < 10; k++) {
    console.log(`aixo es la k: ${k}`)
    break;
}



var i = 50;
while(i>=0){
    console.log(i);
    i = i - 5;//i=i-1;

}

i =-2;
do{
    console.log(i);
    i--;
}while(i>0)
