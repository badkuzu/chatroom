import { RawData, WebSocket } from "ws"
import chalk from "chalk"
import * as readline from "readline"

const ws = new WebSocket('ws://localhost:8000');

const rdl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const inputListener = () => rdl.question('', msg => {
    ws.send(msg)
    inputListener()
})
inputListener()

const formatResponse = (response: RawData) => {
    let split = response.toString().split(':')
    return chalk.blue(split[0]) + ': ' + split[1]
}

ws.on('message', (data) => {
    console.log(formatResponse(data))
    inputListener()
})
