var Logger = require('./logger');
var logger = new Logger().getInstance();

var Customer = require('./customer');
var inventory = require('./data');
var Store = require('./store');


var customer = new Customer('Steve', 1200);
var store = new Store('Fishing Paradise', inventory);

console.log(`${logger.count} logs in total.`);
logger.logs.map(log => console.log(`\t ${log.message}`));
