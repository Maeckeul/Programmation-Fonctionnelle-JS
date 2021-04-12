/*

Hello user
========================



Objectifs
---------
Ecrire une fonction `sayHelloToUser` qui permet de dire bonjour à un utilisateur en citant son prénom et son nom.

Cette fonction prend comme argument un objet qui représente l'utilisateur, et dans cette fonction on veut pouvoir utiliser directement les propriétés dont on a besoin sous forme de variables, mais sans avoir à déclarer ces variables dans le corps de la fonction... :pensif:

Note: pas de test ici
*/

var user = {
  country: 'France',
  firstName: 'Pierre',
  lastName: 'Aldado',
  email: 'p.aldado@oclock.io',
  phone: '0123456789',
  login: 'paldado',
  age: '32',
  lang: 'fr',
};

// Décompo' en 2 tps
// function sayHelloToUser(people) {
//   const {firstName, lastName} = people;
//   return `Salut ${firstName} ${lastName}`;
// }

// Décompo' en 1 tps
// function sayHelloToUser({firstName, lastName}) {
//   return `Salut ${firstName} ${lastName}`;
// }

const sayHelloToUser = ({firstName, lastName}) => `Salut ${firstName} ${lastName}`;

const message = sayHelloToUser(user);
console.log(message);