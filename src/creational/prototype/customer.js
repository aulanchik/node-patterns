class Customer {

    constructor(name = 'unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addListItem(item) {
        this._shoppingList.push(item);
    }

    clone() {
        // create a prototype of the 'original' object
        var prototype = Object.getPrototypeOf(this);

        // using prototype create a new object
        var clonedObject = Object.create(prototype);

        clonedObject._name = this._name;
        clonedObject._shoppingList = [...this._shoppingList];

        return clonedObject;
    }
}

module.exports = Customer;
