/*

Chacun son tour
===============

Un intégrateur nous a gentiment préparé des div en `display: none`. 
C'est à nous de les afficher en JS.

Objectifs
---------
- Cibler les div avec la classe CSS `.box`
- Afficher les div une à une avec 1 seconde entre chaque

Notions
-------
- DOM : document.querySelectorAll ou getElementsByClassName
- JS : for ou forEach / setTimeout

*/

// je cible les div.box
const items = document.querySelectorAll('.box');

// je parcours mes items avec forEach (querySelectorAll retourne un NodeList possédant la méthode forEach)

items.forEach((item, index) => {
    setTimeout(() => {
        // item représente la valeur courante, ici un element du DOM
        // on peut modifier ses styles via la propriété style
        item.style.display = 'block';
    }, 1000 * index);
});