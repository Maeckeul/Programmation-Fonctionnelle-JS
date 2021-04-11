/*

Ça va pas être possible…
========================

Et si on sortait en boîte de nuit ?

Objectifs
---------
Créer un tableau `allowedUsers` à partir du tableau `users` ne comportant que les membres qui ont le droit d'entrer.

Afin de pouvoir entrer en boîte de nuit, il faut :
- Avoir au moins 18 ans;
- Avoir au moins 20€ en poche;
- Si on n'a pas 18 ans, avoir 500€ en poche pour corrompre le videur

Sinon, ça va pas être possible !

Notions
-------
- Array : ce serait cool de pouvoir filtrer… (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)

*/

var users = [
  {
    name: 'Claire',
    age: 34,
    cash: 2250,
  },
  {
    name: 'Phil',
    age: 35,
    cash: 1005,
  },
  {
    name: 'Haley',
    age: 18,
    cash: 10,
  },
  {
    name: 'Luke',
    age: 15,
    cash: 0,
  },
  {
    name: 'Alex',
    age: 16,
    cash: 400,
  },
  {
    name: 'Manny',
    age: 14,
    cash: 777,
  },
  {
    name: 'Lily',
    age: 5,
    cash: 5,
  },
];


// la méthode des Array filter ressemble beaucoup à forEach et map dans le sens où on lui passe en argument une fonction de rappel prenant la valeur courant en paramètre
// filter retourne un nouveau tableau avec seulement certaines des valeurs du tableau d'origine
// le fait de garder ou non la valeur sera déterminer par le retour de la fonction de rappel, si on retourne true, on garde, si on retourne false on ne garde pas

// const allowedUsers = users.filter(function(user) {
  // pour passer
  // SOIT avoir +500e
  // SOIT avoir +20e ET 18 ans
//  const canPass = (user.cash > 500) || (user.cash > 20 && user.age >= 18); 
//  return canPass;
// });

// console.log(allowedUsers);

// // en version fléchée, avec return implicite :
// const allowedUsers = users.filter((user) => user.age> 18 && user.cash >= 20 || user.cash >= 500);

const allowedUsers = users.filter((user) =>
  user.cash > 500 || user.cash > 20 && user.age >= 18
  );

console.log(allowedUsers);
/*
 * Tests
 */
var result = document.getElementById('test');
if (
  allowedUsers.length === 3
  && allowedUsers[0].name === 'Claire'
  && allowedUsers[1].name === 'Phil'
  && allowedUsers[2].name === 'Manny'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
