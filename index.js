#!/usr/bin/env node
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!');
} else {
    console.log('Retreat from the xupptumblers!');
}