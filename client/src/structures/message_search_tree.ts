import { keyValueBinarySearch } from "../algorithms/binary_search"
import { addItem, Tree } from "./tree"

type CompareReturn = 1 | 0 | -1

type MessageTreeData = {
  word: string
  messagePosition: number
}

type MessageObject = {
  message: string
  author: string
  timestamp: string
}

type AddMessageReturn = {
  tree: Tree<MessageTreeData>
  messageArray: MessageObject[]
}

function alphabetCompare(
  current: MessageTreeData,
  target: MessageTreeData
): CompareReturn {
  const currentWord = current.word.toLowerCase()
  const targetWord = target.word.toLowerCase()

  if (currentWord > targetWord) return -1
  if (currentWord < targetWord) return 1
  return 0
}

// split message by words
// save message object in message array
// save word along with position in message array in search tree
function addMessage(
  tree: Tree<MessageTreeData>,
  newMessageObject: MessageObject,
  messageArray: MessageObject[]
): AddMessageReturn {
  const newMessageArray = [...messageArray, newMessageObject]
  const newMessagePosition = newMessageArray.length - 1

  const words = newMessageObject.message.split(" ")
  const newTree = addWords(tree, words, newMessagePosition)

  return {
    messageArray: newMessageArray,
    tree: newTree,
  }
}

// add words
// accept array of words and tree
// pop word, give it to add word
// return popped + new tree
function addWords(
  tree: Tree<MessageTreeData>,
  wordsArray: string[],
  messagePosition: number
): Tree<MessageTreeData> {
  const wordToAdd = wordsArray[wordsArray.length - 1]
  if (!wordToAdd) return tree

  const newWordsArray = wordsArray.slice(0, wordsArray.length - 1)

  const data = {
    word: wordToAdd,
    messagePosition,
  }
  const newTree = addWord(tree, data)
  return addWords(newTree, newWordsArray, messagePosition)
}

function addWord(
  tree: Tree<MessageTreeData>,
  data: MessageTreeData
): Tree<MessageTreeData> {
  return addItem<MessageTreeData>(tree, data, alphabetCompare)
}

// finds the index of the message in message array
function findMessagePosition(
  word: string,
  tree: Tree<MessageTreeData>
): number | undefined {
  const foundItem = keyValueBinarySearch({ word }, tree, alphabetCompare)
  return foundItem?.messagePosition
}

function findMessage(
  word: string,
  tree: Tree<MessageTreeData>,
  messageArray: MessageObject[]
): MessageObject | null {
  const messagePosition = findMessagePosition(word, tree)
	if (messagePosition === undefined) return null
  return messageArray[messagePosition]
}

export { addMessage, addWords, addWord, findMessagePosition, findMessage }
export { MessageTreeData, MessageObject }
