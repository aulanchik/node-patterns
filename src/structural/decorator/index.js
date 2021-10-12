let Customer = require('./customer');
let {
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
} = require('./inventoryItem');

let customer = new Customer('Alex', 4000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var goldNecklace = new GoldenInventoryItem(necklace);
var diamondGoldNecklace = new DiamondInventoryItem(goldNecklace);

var diamondWalkman = new DiamondInventoryItem(walkman);

customer.purchase(diamondGoldNecklace);
customer.purchase(diamondWalkman);
customer.printStatus();

diamond_walkman.print();
