class Person {

    constructor(builder) {
        this._name = builder.name
        this._isEmployee = builder.isEmployee;
        this._isManager = builder.isManager;
        this._hours = builder.hours || 0;
        this._money = builder.money || 0;
        this._shoppingList = builder.shoppingList || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Person;
