var LoggerStrategy = require('./loggerStrategy');
var config = require('./config');

class Logger {

    constructor(strategy='toConsole') {
        this.logs = [];
        this.strategy = LoggerStrategy[strategy];
    }

    get count() {
        return this.logs.length
    }

    changeStrategy(newStrategy) {
        this.strategy = LoggerStrategy[newStrategy];
    }

    log(message) {
        const timestamp = new Date().toISOString()
        this.logs.push({ message, timestamp })
        this.strategy(timestamp, message);
    }

}

module.exports = new Logger(config.logs.strategy);
