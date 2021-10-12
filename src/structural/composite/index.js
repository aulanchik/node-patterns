let CatalogItem = require('./catalogItem');
let CatalogGroup = require('./catalogGroup');

let boots = new CatalogItem("Leather Boots", 79.99);
let sneakers = new CatalogItem("Kicks", 39.99);
let slippers = new CatalogItem("Slippers", 19.99);

let items = [boots, sneakers, slippers];

var group_shoes = new CatalogGroup("Shoes and Stuff", items);

var group_food = new CatalogGroup("Food order", [
    new CatalogItem("Milkshake", 5.99),
    new CatalogItem("French Fries", 3.99)
]);

var keychain = new CatalogItem("Key Chain", .99);

var catalog = new CatalogGroup("Clothes and Food", [keychain, group_shoes, group_food]);

console.log(`$${catalog.total}`);

catalog.print();
