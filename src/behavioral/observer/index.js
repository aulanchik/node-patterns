var Store = require('./store');
var Customer = require('./customer');
var Mall = require('./mall');

var store1 = new Store("Cats & Things");
var store2 = new Store("Ins and Outs");

var alex = new Customer("Alex");
var eve = new Customer("Eve");
var sharon = new Customer("Sharon");
var mike = new Customer("Mike");

var mall = new Mall();

store1.subscribe(alex);
store1.subscribe(eve);
store1.subscribe(mike);
store1.subscribe(mall);

store2.subscribe(sharon);
store2.subscribe(mall);

store2.sale(20);
store2.sale(50);

console.log(mall.sales);
