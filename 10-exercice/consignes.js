/**
 *  Faire une fonction fléchée qui affiche la soustraction de 2 nombres
 */

// Write your code here
const subtract = (num1, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  console.log(num1, "-", num2, "=", num1 - num2);
};

subtract(8, 3);
