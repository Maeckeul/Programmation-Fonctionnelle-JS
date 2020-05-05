/*

Mékicé ?
========================

Pfiou, ces gens qui prennent des pseudos, pas facile de s'y retrouver ! Mais c'est qui "paldado" ??

Objectifs
---------
Créer une fonction `findUser` qui à partir d'un `login` et d'un tableau `users` retourne l'utilisateur qui a ce login.

Notions
-------
- Array : ce serait cool de pouvoir chercher, ou plutôt _trouver_… (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find)

*/

var data = [
  {
    name: 'Claire',
    login: 'La_mOuche',
  },
  {
    name: 'Delphine',
    login: 'Josiane',
  },
  {
    name: 'Emilie',
    login: 'Lili',
  },
  {
    name: 'Cédric',
    login: 'x__{^^}__x',
  },
  {
    name: 'Pierre',
    login: 'paldado',
  },
  {
    name: 'Sylvain',
    login: 'navilsy',
  },
];

// définition de la fonction qui retourne un user
function findUser(login, users) {
  const foundUser = users.find(function(currentUser) {
    // if (currentUser.login === login) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
    return currentUser.login === login;
  });
  return foundUser;
}

// tests d'execution
const testFindUser = findUser('navilsy', data);
const secondTest = findUser('totoDu02', [
  {
    name: 'truc',
    login: 'bidule',
  },
  {
    name: 'John',
    login: 'totoDu02',
  }
]);

console.log(testFindUser);
console.log(secondTest);

// find est une méthode des array qui prend une fonction de rappel ou callback en paramètre
// cette fonction de rappel est executée par find sur chaque valeur du tableau et prend en paramètre la valeur courante
// si la fonction de rappel renvoie true, alors find arrête de parcourir le tableau et renvoie la valeur courante, sinon il va tester la valeur suivante



// // version 1 fléchée 
// const findUser = (login, users) => {
//   const foundUser = users.find((currentUser) => {
//     return currentUser.login === login;
//   });
//   return foundUser;
// };

// // version 2 fléchée
// const findUser = (login, users) => {
//   const foundUser = users.find((currentUser) => currentUser.login === login);
//   return foundUser;
// };




/*
 * Tests
 */
var result = document.getElementById('test');
if (
  findUser('paldado', data) === data[4]
  && findUser('Josiane', data) === data[1]
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
