var Person = require('./person');

class PersonBuilder {
    constructor(name) {
        this._name = name;
    }

    makeEmployee() {
        this._isEmployed = true;
        return this;
    }

    makeManager(hours=40) {
        this.isManager = true;
        this.hours = hours;
        return this;
    }

    makePartTime(hours=20) {
        this.hours = hours;
        return this;
    }

    withMoney(money) {
        this.money = money;
        return this;
    }

    withList(list=[]) {
        this.shoppingList = list;
        return this;
    }

    build() {
        return new Person(this);
    }
}

module.exports = PersonBuilder;
