var inventory = require('./inventory');

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press any direction key...');

process.stdin.on('keypress', (str, key) => {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch (key.name) {

        case 'right':
            inventory.next().writeLn();
            break;

        case 'left':
            inventory.prev().writeLn();
            break;

        case 'down':
            inventory.last().writeLn();
            break;

        case 'up':
            inventory.first().writeLn();
            break;

        case 'c':
            if (key.ctrl) {
                process.exit()
            }
    }

});
