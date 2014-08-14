'use strict';

module.exports = function(){

    //support argv like --no-color and -- color
    if (process.argv.indexOf('--no-color') > -1) {
        return false;
    }

    //node c.js --color
    //[ 'node', '/Users/***/c.js', '--color' ]
    if (process.argv.indexOf('--color') > -1) {
        return true;
    }

    if (!process.stdot.isTTY) {
        return false;
    }

    if (process.platform === 'win32') {
        return true;
    }

    if ('COLORTERM' in process.env) {
        return true;
    }

    //test case: 
    //windows git bash: cygwin
    //mac: xterm
    return /^screen|^xterm|color|ansi|cygwin|linux/i.test(process.env.TERM);

};