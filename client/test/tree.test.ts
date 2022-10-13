import { describe, test, expect } from "@jest/globals"
import { createTree, itemsCount, addItem } from "../src/structures/tree"

describe("creating tree", () => {
  test("create a tree of zero item", () => {
    const tree = createTree()
    expect(itemsCount(tree)).toEqual(0)
  })

  test("create a tree of one item", () => {
		const tree = createTree("a")
		expect(tree).toEqual({ data: 'a', left: null, right: null })
	})

  test("create a tree of two items", () => {})
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
describe("printing the tree", () => {
  test("prints a tree", () => {
  })
})

// TODO: Implement a Map with Trees
