// Declaration des variables

let nombre = document.getElementById('number');
let bouton = document.getElementById('bouton');
let reponses_preced  = document.getElementById('c');

// On definit une fonction aufactorielle qui retournera la factorielle d'un nombre
function factorielle (nb){
    //  on pose une condition comme quoi Si nbr = 0 la factorielle retournera 1
    if (nb == 0){
        return 1;
    }
    // Et si le nombre est > a 0, On fait appel la procedure recursive
    else if( nb > 0) {
        return nb * factorielle(nb - 1);
    }
}
/*
    A la variable bouton on y ajoute un evenement qui est 'onclick'  
    
*/
bouton.onclick = function(){
    /*
        la valeur stockee dans la variable 'nombre' sera prise en paramettre de la fonction factorielle
        'factorielle(nombre.value)' puis le resultat sera affecter a 
        'document.getElementById('reponse').textContent'
    */
    document.getElementById('reponse').textContent = factorielle(nombre.value);
}