var Person = require('./person');

class Employee extends Person {
    constructor(name, accountBalance = 0, employer = '') {
        super(name, accountBalance);
        this._employer = employer;
        this._accountBalance = accountBalance;
        this._isEmployed = true;
    }

    payDay(money = 0) {
        this._accountBalance += money;
    }
}

module.exports = Employee;
