import { describe, test, expect } from "@jest/globals"
import { createTree, addItem } from "../src/structures/tree"
import { keyValueBinarySearch } from "../src/algorithms/binary_search"

// TODO: k -> number or string
interface TreeData {
  [k: string]: any
}

const compareKeyFunction = (
  current: TreeData,
  inserted: TreeData
): number => current.position - inserted.position

// TODO: other than number?
const compareForWordSearch = (
  current: TreeData,
  target: number
): number => current.position as number - target

describe("searching", () => {
  test("returns null for an empty tree", () => {
    const tree = createTree<TreeData>()
    expect(keyValueBinarySearch(2, tree, compareForWordSearch)).toBeNull()
  })

  test("returns the found value in a tree of degree 0", () => {
    const tree = createTree<TreeData>()
    const treeOfOne = addItem(
      tree,
      { word: "hello", position: 1 },
      compareKeyFunction
    )
		const result = keyValueBinarySearch(1, treeOfOne, compareForWordSearch)
    expect(result.word).toBe("hello")
  })

  test("returns the found value in a tree of degree 1", () => {
    const tree = createTree<TreeData>()
    const treeOfOne = addItem(
      tree,
      { word: "hello", position: 1 },
      compareKeyFunction
    )
    const treeOfTwo = addItem(
      treeOfOne,
      { word: "goodbye", position: 2 },
      compareKeyFunction
    )
		const result = keyValueBinarySearch(2, treeOfTwo, compareForWordSearch)
    expect(result.word).toBe("goodbye")
  })
})
