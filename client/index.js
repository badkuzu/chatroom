const { WebSocket } = require('ws')
const chalk = require('chalk')

ws = new WebSocket('ws://localhost:8000');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const inputListener = () => readline.question('', msg => {
    ws.send(msg)
    inputListener()
})
inputListener()

const formatResponse = (response) => {
    let split = response.toString().split(':')
    return chalk.blue(split[0]) + ': ' + split[1]
}

ws.on('message', (data) => {
    console.log(formatResponse(data))
    inputListener()
})
