var userFactory = require('./userFactory');

var James = userFactory('James Orthos', 250);
var Rob = userFactory('Robert Kowalski', 475, 'employee', 'Jennifer Blueberry');

Rob.payDay(600);

console.log(James.toString());
console.log(Rob.toString());
