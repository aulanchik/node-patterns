var Store = require('./Store');
var stock = require('./stock');

var skiShop = new Store('Steep and Deep', stock);

var searchItem = 'powder skis';
var results = skiShop.find(searchItem);

console.log(results);
