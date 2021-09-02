const { TestWatcher } = require('jest')
const {recebimento} = require ('./src/recebimento.js')

var valor = recebimento(20,8,10)

console.log(`valor a pagar ${valor}`)


