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
console.log(items);

items.forEach((item, itemIndex) => {
    setTimeout(() => {
        item.style.display = 'block';
    }, 500 * itemIndex);
    
});


