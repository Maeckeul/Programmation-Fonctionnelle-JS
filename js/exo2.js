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

// je veux créer un nouveau tableau de personnage allégé
// je crée un nouveau tableau
// const characters = [];
// pour chaque valeur du tableau original 

// version for: 
// for(const currentCharacter of datas) {
//  console.log(currentCharacter);
// j'ajoute une valeur dans mon nouveau tableau

// const newCharacter = {
//  name: `${currentCharacter.firstname} ${currentCharacter.lastname}`,
//  young: currentCharacter.age < 50,
//  };

//  characters.push(newCharacter);
//}

// console.log(characters);

//version forEach:

// const characters = []; 

// datas.forEach(function(currentCharacter) {
//  const newCharacter = {
//    name: `${currentCharacter.firstname} ${currentCharacter.lastname}`,
//    young: currentCharacter.age < 50,
//  };
//  characters.push(newCharacter);
//});

// version map : 

const characters = datas.map(function(currentCharacter) {
  console.log(currentCharacter);
  const newCharacter = {
    name: `${currentCharacter.firstname} ${currentCharacter.lastname}`,
    young: currentCharacter.age < 50,
  };
  return newCharacter;
});

console.log(characters);




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
