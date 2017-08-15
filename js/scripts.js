var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

console.log(femaleNames);
console.log(maleNames);

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
  var indexOfMarian1 = allNames.indexOf('Marian');
  console.log('Imię "Marian" zostało dodane do tablicy na pozycji ' + indexOfMarian1 + ' (pamiętaj liczenie rozpoczynamy od zera)');
} else {
  var indexOfMarian2 = allNames.indexOf('Marian');
  console.log('Imię "Marian" znajduje się już w tablicy na pozycji ' + indexOfMarian2 + ' (pamiętaj liczenie rozpoczynamy od zera)');
}

console.log(allNames);