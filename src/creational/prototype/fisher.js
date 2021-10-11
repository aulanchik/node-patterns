var Customer = require('./customer');

var fisher = new Customer();
fisher.addListItem('Fishing Line');
fisher.addListItem('Fishing Suit');
fisher.addListItem('Fishing Rod');
fisher.addListItem('Boots');
fisher.addListItem('Bait');

module.exports = fisher;
