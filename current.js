#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const date = new Date()

if((argv.year === true)||(argv.y === true)) {
    console.log(date.getFullYear())
}

if((argv.month === true)||(argv.m  === true)) {
    console.log(date.getMonth())
}

if((argv.date === true)||(argv.d  === true)) {
    console.log(date.getDate())
}