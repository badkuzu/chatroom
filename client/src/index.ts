import { RawData, WebSocket } from "ws"
import chalk from "chalk"
import * as readline from "readline"
import { find, save } from "./search"

type ParsedMessage = [user: string, message: string]

const ws = new WebSocket("ws://localhost:8000")

const rdl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const inputListener = () =>
  rdl.question("", (msg) => {
    if (msg === "/f") {
      rdl.question("find: ", (word) => {
        console.log(find(word))
        inputListener()
      })
      return
    }
    ws.send(msg)
    save(msg)
    inputListener()
  })

inputListener()

const parseMessage = (response: RawData): ParsedMessage =>
  response.toString().split(":") as ParsedMessage

const formatResponse = (message: string, user: string) =>
  chalk.blue(user) + ": " + message

ws.on("message", (data) => {
  const [user, message] = parseMessage(data)
  console.log(formatResponse(message, user))
  save(message, user)
  inputListener()
})
