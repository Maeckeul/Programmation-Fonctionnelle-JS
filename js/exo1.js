/*

For Hitch
=========

Utilisons le tableau de chaînes de caractères `items` pour présenter chaque entrée dans le DOM.

Objectifs
---------
- Contruire une liste HTML (avec des <li>)
- Ajouter la liste dans le ul#result déjà présent dans le HTML

Notions
-------
- DOM : document.getElementById / document.createElement / appendChild
- Array : forEach

*/

var items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];

// objectif: insérer un li dans le ul qui a l'id result pour chaque valeur du tableau

// il me faut un pointeur vers le ul
let ul = document.getElementById('result');

// je dois parcourir le tableau
for (let item of items) {
    // pour chaque valeur
    // créer un li
    let li = document.createElement('li');
    // écrire la valeur courante dans le li
    li.textContent = item;
    // insérer le li dans le ul
    ul.appendChild(li);
}