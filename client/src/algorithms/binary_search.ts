import { Key } from "readline"
import { Tree } from "../structures/tree"

// TODO: k also a string???
interface treeObject<V> {
  [k: number]: V
}

const binarySearch = <T>(target: T, tree: Tree<T>) => {
  if (tree?.data === target) return 0
  return null
}

const keyValueBinarySearch = <V>(
  targetKey: keyof treeObject<V>,
  tree: Tree<treeObject<V>>,
  compare: (data: treeObject<V>, target: number) => number
): V | null => {
  if (!tree) return null

  const compareResult = compare(tree.data, targetKey)
  if (compareResult < 0) {
    return keyValueBinarySearch(targetKey, tree.left, compare)
  } else if (compareResult > 0) {
    return keyValueBinarySearch(targetKey, tree.right, compare)
  } else {
    // found
    return tree.data[targetKey]
  }
}

export { binarySearch, keyValueBinarySearch }
