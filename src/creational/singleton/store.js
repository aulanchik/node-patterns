var Logger = require('./logger');
var logger = new Logger().getInstance();

class Store {

    constructor(name, inventory=[]) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store: ${name} | Stock: ${inventory.length} items.`);
    }
    
}

module.exports = Store;
