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

let ul = document.getElementById('result');
console.log(ul);

let addLi = function(item) {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
}

items.forEach(addLi);

// version for :
// // je dois parcourir le tableau
// for (let item of items) {
//     // pour chaque valeur
//     // créer un li
//     let li = document.createElement('li');
//     // écrire la valeur courante dans le li
//     li.textContent = item;
//     // insérer le li dans le ul
//     ul.appendChild(li);
// }