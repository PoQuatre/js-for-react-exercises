/**
 * Faire une fonction qui affiche la table de multiplication d'un nombre passé en paramètre
 */

// Write your code here
const multiplicationTable = (num) => {
  num = parseInt(num);

  for (let i = 1; i <= 10; i++) {
    console.log(num, "x", i, "=", num * i);
  }
};

multiplicationTable(process.argv[2]);
