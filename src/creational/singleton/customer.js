var Logger = require('./logger');
var logger = new Logger().getInstance();

class Customer {
    constructor(name, money = 0) {
        this.name = name;
        this.money = money;
        logger.log(`New Customer: ${name} | Balance ${money}.`);
    }
}

module.exports = Customer;
