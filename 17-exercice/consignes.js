/*
 * À l'aide de la méthode map, créer un nouveau tableaux qui contiendra des noms de domaines à partir
 * des prenoms.
 * exemples: ['jean', 'neymar']  devient ['https://jean.com', 'https://neymar.com']
 *
 */
let prenoms = ["Priam", "Hortense", "Rose", "Ingrid", "Bryan"];

// Write your code here
const domains = prenoms.map((prenom) => `https://${prenom.toLowerCase()}.com`);
console.log(domains);
