const { writeFile, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {

    constructor() {
        this.items = {}
        if (existsSync('localStorage.json')) {
            console.log('Loading items from local storage');
            var txt = readFileSync('localStorage.json');
            this.items = JSON.parse(txt);
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    get getItem(key) {
        return this.items[key];
    }

    set setItem(key, value) {
        this.items[key] = value;
        writeFile('localStorage.json', JSON.stringify(this.items), error => {
            if (error) {
                console.error(error);
            }
        })
    }

    clear() {
        this.items = {};
        unlink('localStorage.json', () => {
            console.log('localStorage file removed');
        })
    }

}

module.exports = new LocalStorage();
