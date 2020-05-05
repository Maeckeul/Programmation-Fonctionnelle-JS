/*

Compression de user
========================

On a récupéré un objet représentant un utilisateur, il y a plein d'informations dedans et on en utilise seulement certaines, on voudrait récupérer seulement les informations dont on a besoin.

Objectifs
---------
Créer une variable `firstName` dans laquelle on stocke le nom de l'utilisateur, une variable `login` pour son login... Et écrire ça en une seule ligne !

Puis renommer la variable `firstName` en `name`.

Notions
-------
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
*/

var user = {
  country: 'France',
  lastName: 'Aldado',
  email: 'p.aldado@oclock.io',
  phone: '0123456789',
  login: 'paldado',
  age: '32',
  firstName: 'Pierre',
  lang: 'fr',
};

// dans un objet on accède à une valeur par sa clé
// l'ordre importe peu, c'est le nom de la clé qui compte
// const name = user.firstName;
// const login = user.login;

// la MËME chose PEUT être via la destructuration/decomposition/destructuring
// ici ce que je fais : j'assigne dans une constante login la valeur de la propriété login de l'objet user et j'assigne dans une constante name la valeur de la propriété firstName de l'objet user
// On peut choisir le nom de notre constante à l'aide de :
const { login, firstName: name, lastName } = user; 


// la décomposition ne permet que d'assigner des choses

// ensuite on peut manipuler ces données selon nos besoins
// const fullName = `${name} ${lastName}`;








/*
 * Tests

 */
var result = document.getElementById('test');
if (
  name === user.firstName
  && login === user.login
  ) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
