import { describe, test, expect } from "@jest/globals"
import { createTree, itemsCount} from '../src/structures/tree'

describe("creating tree", () => {
  test("create a tree of zero item", () => {
    const tree = createTree()
    expect(itemsCount(tree)).toEqual(0)
  })

  test.todo("create a tree of one item")

  test.todo("create a tree of two items")
})

describe("adding items", () => {})

/**
 * Tree should be printed in the following format:
 * a
 * - e
 * - b
 * - - c
 * - d
 */
describe("printing the tree", () => {})

// TODO: Implement a Map with Trees
