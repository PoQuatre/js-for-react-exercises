/**
 * Convertir des heures en minutes
 * Vous pouvez utiliser les arguments depuis le terminal ou avec prompt.
 * l'utilisateur saisit des heures
 * l'utilisateur saisit des minutes
 * convertir les heures et minutes en minutes
 * exemple: 1h30 -> 90minutes
 */

// Write your code here
const regex = /^([0-9]+)h([0-5][0-9])?$/i;
const input = process.argv[2];

if (!regex.test(input)) {
  console.log(`"${input}" is not a valid time string`);
  return;
}

const groups = regex.exec(input);

const hours = parseInt(groups[1]);
const mins = parseInt(groups[2]) || 0;

console.log(`${input} -> ${hours * 60 + mins} minutes`);
