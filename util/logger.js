module.exports = {
    log: (...fmt) => {
        var now = `[${Date.now()}]`;

        console.log(now, fmt.join(''));
    },
    debug: (text) => {
        module.exports.log('\x1b[34m', text, '\x1b[0m');
    },
    warn: (text) => {
        module.exports.log('\x1b[33m', text, '\x1b[0m');
    },
    err: (text) => {
        module.exports.log('\x1b[31m', text, '\x1b[0m');
    }
}
