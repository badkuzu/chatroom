import {
  addMessage,
  findMessage,
  MessageObject,
  MessageTreeData,
} from "./structures/message_search_tree"
import { createTree, Tree } from "./structures/tree"

let messageArray: MessageObject[] = []
let wordTree: Tree<MessageTreeData> = createTree<MessageTreeData>()

const save = (message: string, author: string = "you") => {
  const date = new Date()
  const newMessageObject = { message, author, timestamp: date.toISOString() }
  const { messageArray: newMessageArray, tree: newWordTree } = addMessage(
    wordTree,
    newMessageObject,
    messageArray
  )
  messageArray = newMessageArray
  wordTree = newWordTree
}

const find = (word: string) => findMessage(word, wordTree, messageArray) || "not found"

export { save, find }
