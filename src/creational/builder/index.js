var PersonBuilder = require('./personBuilder');

var James = new PersonBuilder('James').makeEmployee().build();

var Charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

var Aisha = new PersonBuilder('Aisha').withMoney(750).build();

console.log(James.toString());
console.log(Charles.toString());
console.log(Aisha.toString());
