import { describe, test, expect } from "@jest/globals"
import { spyOn } from "jest-mock"
import {
  createTree,
  itemsCount,
  addItem,
  printTree,
} from "../src/structures/tree"

// example function
const compareFunction = (current: number, inserted: number) => current - inserted

describe("creating tree", () => {
  test("create a tree of zero items", () => {
    const tree = createTree()
    expect(itemsCount(tree)).toEqual(0)
  })
})

describe("adding items", () => {
  test("adds one item at the root", () => {
    const tree = addItem(null, 1, compareFunction)
    expect(tree?.data).toEqual(1)
  })

  test("adds a higher sorted item to the right leaf", () => {
    const tree = addItem(addItem(null, 1, compareFunction), 2, compareFunction)
    expect(tree?.data).toEqual(1)
    expect(tree?.right?.data).toEqual(2)
  })

  test("adds a lower sorted item to the left leaf", () => {
    const tree = addItem(addItem(null, 2, compareFunction), 1, compareFunction)
    expect(tree?.data).toEqual(2)
    expect(tree?.left?.data).toEqual(1)
  })

  test("adds an element in between the first two at an appropriate depth", () => {
    const tree = addItem(addItem(null, 1, compareFunction), 3, compareFunction)
    const treeWithThreeElements = addItem(tree, 2, compareFunction)
    expect(treeWithThreeElements?.data).toEqual(1)
    expect(treeWithThreeElements?.right?.data).toEqual(3)
    expect(treeWithThreeElements?.right?.left?.data).toEqual(2)
  })
})

/**
 * Tree should be printed in the following format:
 * a
 * - b
 * - - c
 * - d
 */
describe("printing the tree", () => {
  test("prints a tree", () => {
  })
})

// TODO: Implement a Map with Trees
