#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const date = new Date()

if((argv.date !== undefined)||(argv.d !== undefined)) {
    daysToAdd = argv.date||argv.d
    date.setDate(date.getDate() - daysToAdd);
}

if((argv.month !== undefined)||(argv.m !== undefined)) {
    monthsToAdd = argv.month||argv.m
    date.setMonth(date.getMonth() - monthsToAdd);
}

if((argv.year !== undefined)||(argv.y !== undefined)) {
    yearsToAdd = argv.year||argv.y
    date.setYear(date.getFullYear() - yearsToAdd);
}

console.log(date)