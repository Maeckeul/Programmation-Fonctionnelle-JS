/*

À ma guise
==========

Des données nous sont parvenues d'un serveur, mais la structure n'est pas top. 
Changeons le format de ces données !

Objectifs
---------
- Une propriété "name" qui ressemblerait à "Prénom Nom"
- Une propriété "young" qui contiendrait un booléen : 
  `true` quand le personnage a moins de 50 ans, sinon `false`
- Les autres données sont inutiles, on ne les conserve pas

Notions
-------
- Array : map
- String : template strings

*/


// une const fonctionne comme une let, elle permet de contenir une valeur, comme la let elle possède une porté de block
// MAIS elle n'est pas réassignable
const datas = [
  {
    firstname: 'Marge',
    lastname: 'Simpson',
    gender: 'Women',
    age: 34,
  },
  {
    firstname: 'Ned',
    lastname: 'Flanders',
    age: 61,
  },
  {
    firstname: 'Charles Montgomery',
    lastname: 'Burns',
    age: 104,
  },
  {
    firstname: 'Waylon',
    lastname: 'Smithers',
    age: 36,
  },
];

// // on ne peut pas réassigner une const
// datas = 123;

// version map
// map nous retourne d'office un nouveau tableau sans toucher à l'original
// const characters = datas.map(function (currentCharacter) {
//   const newCharacter = {
//     name: `${currentCharacter.firstname} ${currentCharacter.lastname}`,
//     young: currentCharacter.age < 50,
//   };
//   // map rempli le tableau qu'il construit avec les valeurs de retour de la fonction de rappel
//   return newCharacter;
// });

const characters = datas.map((currentCharacter) => ({
  name: `${currentCharacter.firstname} ${currentCharacter.lastname}`,
  young: currentCharacter.age < 50,
}));

console.log(characters);

// // version forEach
// // Objectif: je veux créer un nouveau tableau de personnages allégés
// // - je crée un tableau
// const characters = [];
// // - pour chaque valeur du tableau original
// datas.forEach(function(currentCharacter) {
//   // - j'ajoute une valeur dans mon nouveau tableau
//   const newCharacter = {
//     // name: currentCharacter.firstname + ' ' + currentCharacter.lastname,
//     name: `${currentCharacter.firstname} ${currentCharacter.lastname}`,
//     // une opération de comparaison donne un booléen
//     young: currentCharacter.age < 50,
//   };
//   characters.push(newCharacter);
// });

// version for
// // Objectif: je veux créer un nouveau tableau de personnages allégés
// // - je crée un tableau
// const characters = [];
// // - pour chaque valeur du tableau original
// for (const currentCharacter of datas) {
//   // - j'ajoute une valeur dans mon nouveau tableau
//   const newCharacter = {
//     // name: currentCharacter.firstname + ' ' + currentCharacter.lastname,
//     name: `${currentCharacter.firstname} ${currentCharacter.lastname}`,
//     // une opération de comparaison donne un booléen
//     young: currentCharacter.age < 50,
//   };
//   characters.push(newCharacter);
// }

// ----------- A propos des fonctions fléchées
// // on connaissait les déclarations de fonctions
// function sum(a, b) {
//   return a + b;
// }

// // on connaissait les expressions de fonctions
// const sum = function(a, b) {
//   return a + b;
// }

// // ES6 introduit les expressions de fonctions fléchées, on n'écit plus function à la place on met une grosse fleche / fat arrow / => à droite des arguments
// const sum = (a, b) => {
//   return a + b;
// }

// // il existe quelques possibilités :
// // lorsqu'on a un et un seul paramètre on n'est pas obligé de l'entourer de parenthèses
// const double = number => {
//   return number * 2;
// }

// // si on en 0 ou 2 ou plus on DOIT mettre les parenthèses
// const sayHello = () => {
//   return 'coucou';
// }

// // lorsqu'on a un retour direct, sans traitement avant, on PEUT omettre les accolades et le return
// const sum = (a, b) => a + b;

// const double = number => number * 2;

// const sayHello = () => 'coucou';

// // cas particulier : si on retourne directement un objet avec un return implicite alors il faut entourer l'objet de parenthèses
// const giveCharacter = () => ({
//   name: 'Test',
//   age: 32,
// });

// // si on a du traitement on a la pas le choix, on explicite le return
// const sayName = () => {
//   const name = 'Alexis';
//   const age = 15 * 2;
//   return name + age;
// } 

/*
 * Tests
 */
var result = document.getElementById('test');
if (
  // On a désormais `name` et `young`
  characters[0].name === 'Marge Simpson'
  && characters[1].name === 'Ned Flanders'
  && characters[2].name === 'Charles Montgomery Burns'
  && characters[3].name === 'Waylon Smithers'
  && characters[0].young
  && !characters[1].young
  && !characters[2].young
  && characters[3].young

  // Les anciennes props ne doivent plus être définies
  && typeof characters[0].gender === 'undefined'
  && typeof characters[0].firstname === 'undefined'
  && typeof characters[0].lastname === 'undefined'
  && typeof characters[1].firstname === 'undefined'
  && typeof characters[1].lastname === 'undefined'
  && typeof characters[2].firstname === 'undefined'
  && typeof characters[2].lastname === 'undefined'
  && typeof characters[3].firstname === 'undefined'
  && typeof characters[3].lastname === 'undefined'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
