import { Key } from "readline"
import { Tree } from "../structures/tree"

// TODO: k also a string???
interface TreeData {
  [k: string]: any
}

const binarySearch = <T>(target: T, tree: Tree<T>) => {
  if (tree?.data === target) return 0
  return null
}

const keyValueBinarySearch = <V, D>(
  searchQuery: V,
  tree: Tree<D>,
  compare: (current: any, target: any) => number
): D | null => {
  if (!tree) return null

  const compareResult = compare(tree.data, searchQuery)
  if (compareResult < 0) {
    return keyValueBinarySearch(searchQuery, tree.left, compare)
  } else if (compareResult > 0) {
    return keyValueBinarySearch(searchQuery, tree.right, compare)
  } else {
    // found
    return tree.data
  }
}

export { binarySearch, keyValueBinarySearch }
