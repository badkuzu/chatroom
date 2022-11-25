import { describe, test, expect } from "@jest/globals"
import { createTree, addItem } from "../src/structures/tree"
import { keyValueBinarySearch } from "../src/algorithms/binary_search"

// TODO: k -> number or string
interface treeObject<V> {
  [k: number]: V
}

const compareKeyFunction = <V>(
  current: treeObject<V>,
  inserted: treeObject<V>
): number => Number(Object.keys(current)[0]) - Number(Object.keys(inserted)[0])

// TODO: other than number?
const compareForSearch = <V>(current: treeObject<V>, target: number): number =>
  Number(Object.keys(current)[0]) - target

describe("searching", () => {
  test("returns null for an empty tree", () => {
    const tree = createTree<treeObject<null>>()
    expect(keyValueBinarySearch(2, tree, compareForSearch)).toBeNull()
  })

  test("returns the found value in a tree of degree 0", () => {
    const tree = createTree<treeObject<string>>()
    const treeOfOne = addItem<treeObject<string>>(
      tree,
      { 1: "hello" },
      compareKeyFunction
    )
    expect(keyValueBinarySearch(1, treeOfOne, compareForSearch)).toBe("hello")
  })

  test("returns the found value in a tree of degree 1", () => {
    const tree = createTree<treeObject<string>>()
    const treeOfOne = addItem(tree, { 1: "hello" }, compareKeyFunction)
    const treeOfTwo = addItem(treeOfOne, { 2: "goodbye" }, compareKeyFunction)
    expect(keyValueBinarySearch(2, treeOfTwo, compareForSearch)).toBe("goodbye")
  })
})
