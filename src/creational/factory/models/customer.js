var Person = require('./person');

class Customer extends Person {
    constructor(name, accountBalance = 0) {
        super(name);
        this._accountBalance = accountBalance;
        this._isEmployed = false;
    }
}

module.exports = Customer;
