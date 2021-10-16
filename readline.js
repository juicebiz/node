const readline = require('readline')
const secret = Math.floor(Math.random()*100)
const interface = readline.createInterface(process.stdin)

console.log('Загадано число в диапазоне от 0 до 100')

interface.on('line', (number) => {
    if(secret < number) {
        console.log('Меньше')
    } else if (secret > number) {
        console.log('Больше')
    } else {
        console.log(`Отгадано число ${number}!`)
        process.exit(0)
    }
})