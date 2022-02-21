/*
 * À l'aide de la méthode filter, récupérer les prenoms qui commencent par 'Ma'
 */
let prenoms = ["Marie", "Antoine", "Sarah", "Mandax"];

// Write your code here
const startWithMa = prenoms.filter((prenom) => prenom.startsWith("Ma"));
console.log(startWithMa);
