/*
Un peu d'épices…
================
Nous allons faire du "currying", c'est à dire préparer une fonction qui va nous renvoyer une nouvelle fonction préparée.

Objectifs
---------
- Faire une fonction : sayHelloToUser
  - elle prend en paramètre un objet user
  - elle retourne une fonction
  - la fonction retournée doit prendre un paramètre `lang`

WHAAAAAT ?!

Par exemple :
  var sayHelloToJohn = sayHelloToUser('john');
  sayHelloToJohn('es'); // => renvoie 'Ola John Doe'
Ou bien :
  var sayHelloToToto = sayHelloToUser('toto');
  sayHelloToToto('fr'); // => renvoie 'Bonjour Toto Dupont'

On pourra utiliser un switch dans la fonction retournée pour déterminer le message en fonction de la langue

Notions
-------
- JS : portée de variable / closure / currying
*/

var users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    login: 'jdoe',
  },
  {
    firstName: 'Toto',
    lastName: 'Dupont',
    login: 'toto',
  },
];

// une fonction peut retourner une fonction
// ainsi à l'execution la valeur récupérée sera une définition de fonction
function sayHelloToUser(user) {
  return function(lang) {
    // une fonction mémorise son contexte, ici la fonction retournée se souvient de la valeur de user
    if (lang === 'fr') {
      console.log(`Bonjour ${user.firstName} ${user.lastName}`);
    }
    else {
      console.log(`Ola ${user.firstName} ${user.lastName}`);
    }
  }
}

// // ce qui donne avec décomposition et fléchée
// const sayHelloToUser = ({ firstName, lastName }) => (lang) => {
//   if (lang === 'es') {
//     console.log(`Ola ${firstName}`);
//   }
//   else {
//     console.log(`Bonjour ${firstName}`);
//   }
// };


const sayHelloToJohn = sayHelloToUser(users[0]);
sayHelloToJohn('fr');


const sayHelloToToto = sayHelloToUser(users[1]);
sayHelloToToto('es');


/*
 * Tests

 */
var result = document.getElementById('test');
var helloJohnFr = sayHelloToUser(users[0])('fr');
var helloTotoEs = sayHelloToUser(users[1])('es');
if (
  helloJohnFr === 'Bonjour John Doe'
  && helloTotoEs === 'Ola Toto Dupont'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
