var fisher = require('./fisher');

var customer = fisher.clone();
customer.name = 'Hugh';
customer.addListItem('Fishing Rod');

console.log(`${customer.name} : ${customer.shoppingList}`);
