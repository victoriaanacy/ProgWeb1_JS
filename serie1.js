//1) Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.

function valeurMax(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

const max = valeurMax(2, 8, 9);
console.log(max);

//2) Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire entre une borne inférieure et une borne supérieure (bornes entières et comprises dans l'intervalle).

function getRandomInt(min, max) {
    return Math.random(); 
}

for (let i=0; i<8; i++) {
    console.log(getRandomInt(1,6));
}

//3) Ecrire deux fonctions compareA et compareB qui retournent les mêmes résultats que dans les exemples suivant:

//compareA(4, '4'); // true 
//compareA(4.0, '4'); // true
//compareA(4, 'quatre'); // false

//compareB(8, '8'); // false
//compareB(8, 'huit'); // false

function compareA(a, b) {
    return a == b;
}

function compareB(a, b) {
    return a === b;
}

console.log(compareA(4, '4'));

//4) En fonction d'un nombre n (ou n > 0) donné en paramètre, écrire une fonction qui affiche dans la console :
// Les nombres entiers pairs compris entre 0 et n.
// Les nombres entiers pairs et multiples de 7 compris entre 0 et n.
// Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n.
// Les nombres entiers pairs et multiples de 3, mais non multiples de 7 compris entre 0 et n.

function pairsNumber(n) {
    return n === pairs;
}

for (let i=0; i<=n; i++) {
    if (i % 2 === 0) console.log(i);
}