/*

Coin-coin !
========================

On a récupéré un tableau qui contient des animaux, on voudrait le décomposer pour stocker chaque animal dans une variable

Objectifs
---------
Créer une variable pour chaque animal du tableau (utiliser le nom de l'animal pour nommer la variable), dans laquelle on stocke les informations de cet animal... Et écrire ça en une seule ligne !

Notions
-------
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring
*/

var animaux = [
  {
    name: 'canard',
    type: 'oiseau',
    aliments: ['insecte', 'poisson'],
    cri: 'coin',
  },
  {
    name: 'chat',
    type: 'félin',
    aliments: ['croquette', 'pâtée', 'souris'],
    cri: 'miaou',
  },
  {
    name: 'lion',
    type: 'félin',
    aliments: ['zèbre', 'antilope', 'buffle'],
    cri: 'rooooaaaarrrr',
  },
  {
    name: 'mouton',
    type: 'ovin',
    aliments: ['herbe'],
    cri: 'bêêê',
  }
];

// on accède à une valeur dans un tableau par son index
// const canard = animaux[0];
// const chat = animaux[1];
// const lion = animaux[2];
// const mouton = animaux[3];

// la MÊME chose peut s'écrire différement avec la décomposition/destructuring
const [canard, chat, lion, mouton] = animaux;
//    [  0   ,   1 ,  2,  ,   3  ]

// ce qui compte dans un TABLEAU, c'est l'ORDRE, ici la on va voir une const canard qui aura la première valeur du tableau animaux, ici le nom est totalement libre, je nomme mes constantes comme je veux

// rien ne nous oblige à décomposer tout le tableau
const [premierElement, secondElement] = animaux;











/*
 * Tests
 */
var result = document.getElementById('test');
if (
  canard === animaux[0]
  && chat === animaux[1]
  && lion === animaux[2]
  && mouton === animaux[3]
  ) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
