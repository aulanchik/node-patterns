var Employee = require('./models/employee');
var Customer = require('./models/customer');

var UserFactory = (name, accountBalance = 0, type, employer) => {
    return type == 'employee' ? new Employee(name, accountBalance, employer) : new Customer(name, accountBalance);
}

module.exports = UserFactory;
