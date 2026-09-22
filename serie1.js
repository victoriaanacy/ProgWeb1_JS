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

function number() { 
}

//3) Ecrire deux fonctions compareA et compareB qui retournent les mêmes résultats que dans les exemples suivant: