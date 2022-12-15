import { describe, test, expect } from "@jest/globals"
import { createTree } from "../src/structures/tree"
import {
  addMessage,
  addWords,
  addWord,
  MessageTreeData,
  MessageObject,
} from "../src/structures/message_search_tree"

describe("addWord", () => {
  describe("for an empty tree", () => {
    const emptyTree = createTree<MessageTreeData>()

    test("adds an item", () => {
      const dataToAdd = {
        word: "hello",
        messagePosition: 0,
      }
      const result = addWord(emptyTree, dataToAdd)
      const expectedResult = {
        data: dataToAdd,
        left: null,
        right: null,
      }

      expect(result).toStrictEqual(expectedResult)
    })
  })

  describe("for a words tree with one item", () => {
    const treeOneItem = {
      data: { word: "hello", messagePosition: 0 },
      left: null,
      right: null,
    }

    test("adds a word to the left node", () => {
      const dataToAdd = {
        word: "bye",
        messagePosition: 5,
      }
      const result = addWord(treeOneItem, dataToAdd)
      const expectedResult = {
        data: { word: "hello", messagePosition: 0 },
        left: { data: dataToAdd, left: null, right: null },
        right: null,
      }

      expect(result).toStrictEqual(expectedResult)
    })
    test("adds a word to the right node", () => {
      const dataToAdd = {
        word: "hi",
        messagePosition: 5,
      }
      const result = addWord(treeOneItem, dataToAdd)
      const expectedResult = {
        data: { word: "hello", messagePosition: 0 },
        left: null,
        right: { data: dataToAdd, left: null, right: null },
      }

      expect(result).toStrictEqual(expectedResult)
    })
  })

  describe("for a words tree with two items", () => {
    const treeTwoItems = {
      data: { word: "hello", messagePosition: 0 },
      left: {
        data: {
          word: "bye",
          messagePosition: 5,
        },
        left: null,
        right: null,
      },
      right: null,
    }

    test("adds a word to the left node's left node", () => {
      const dataToAdd = {
        word: "aloha",
        messagePosition: 10,
      }

      const result = addWord(treeTwoItems, dataToAdd)
      const expectedResult = {
        data: { word: "hello", messagePosition: 0 },
        left: {
          data: {
            word: "bye",
            messagePosition: 5,
          },
          left: { data: dataToAdd, left: null, right: null },
          right: null,
        },
        right: null,
      }

      expect(result).toStrictEqual(expectedResult)
    })

    test("adds a word to the left node's right node", () => {
      const dataToAdd = {
        word: "eeelow",
        messagePosition: 10,
      }

      const result = addWord(treeTwoItems, dataToAdd)
      const expectedResult = {
        data: { word: "hello", messagePosition: 0 },
        left: {
          data: {
            word: "bye",
            messagePosition: 5,
          },
          left: null,
          right: { data: dataToAdd, left: null, right: null },
        },
        right: null,
      }

      expect(result).toStrictEqual(expectedResult)
    })

    test("adds a word to the right node", () => {
      const dataToAdd = {
        word: "hi",
        messagePosition: 5,
      }
      const result = addWord(treeTwoItems, dataToAdd)
      const expectedResult = {
        data: { word: "hello", messagePosition: 0 },
        left: {
          data: {
            word: "bye",
            messagePosition: 5,
          },
          left: null,
          right: null,
        },
        right: { data: dataToAdd, left: null, right: null },
      }

      expect(result).toStrictEqual(expectedResult)
    })
  })
})

describe("addWords", () => {
  const tree = createTree<MessageTreeData>()

  describe("for an empty words array", () => {
    const wordsArray = [] as string[]

    test("returns the same tree", () => {
      const result = addWords(tree, wordsArray, 1)
      expect(tree).toStrictEqual(result)
    })
  })

  describe("for a words array with one word", () => {
    const wordsArray = ["hello"]

    test("returns the tree with the added word", () => {
      const result = addWords(tree, wordsArray, 1)
      const expectedResult = {
        data: {
          word: "hello",
          messagePosition: 1,
        },
        left: null,
        right: null,
      }

      expect(result).toStrictEqual(expectedResult)
    })
  })
  describe("for a words array with multiple words", () => {
    const wordsArray = ["hello", "what", "is", "up"]

    test("returns the tree with multiple added words", () => {
      const result = addWords(tree, wordsArray, 1)
      const expectedResult = {
        data: { word: "up", messagePosition: 1 },
        left: {
          data: { word: "is", messagePosition: 1 },
          left: {
            data: {
              word: "hello",
              messagePosition: 1,
            },
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          data: { word: "what", messagePosition: 1 },
          left: null,
          right: null,
        },
      }

      expect(result).toStrictEqual(expectedResult)
    })
  })
})

describe("addMessage", () => {
  const tree = createTree<MessageTreeData>()

  describe("for an empty message array and tree", () => {
    const messageObjectToAdd = {
      message: "hi Etienne how are you?",
      author: "kuba",
      timestamp: 999999,
    }
    const messageArray = [] as MessageObject[]

    test("returns a populated messages array and a populated words tree", () => {
      const result = addMessage(tree, messageObjectToAdd, messageArray)

			const expectedResultMessageArray = [messageObjectToAdd]
      const expectedResultTree = {
        data: { word: "you?", messagePosition: 0 },
        left: {
          data: { word: "are", messagePosition: 0 },
          left: null,
          right: {
            data: { word: "how", messagePosition: 0 },
            left: {
              data: { word: "Etienne", messagePosition: 0 },
              left: null,
              right: {
                data: { word: "hi", messagePosition: 0 },
                left: null,
                right: null,
              },
            },
            right: null,
          },
        },
        right: null,
      }

			const expectedResult = {
				messageArray: expectedResultMessageArray,
				tree: expectedResultTree
			}

			expect(result).toStrictEqual(expectedResult)
    })
  })
})
