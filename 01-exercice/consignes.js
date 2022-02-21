/**
 * Convertir des pouces en centimetres
 * Vous pouvez utiliser les arguments depuis le terminal ou avec prompt.
 * L'utilisateur saisit un nombre de pouces à convertir
 * 1" (1 pouce) = 2,54 centimètres
 *
 * https://www.pouce-cm.fr/
 */

// Write your code here
const inches = parseFloat(process.argv[2]);
console.log(`${inches}" (${inches} pouces) = ${inches * 2.54}cm`);
