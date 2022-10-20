// NOTE: No function have to be mutating

// First Implement Binary Search tree
// (Add elment as high as possible first place possble)
// Accepts a compare function

type Tree<T> = TreeItem<T> | null

type TreeItem<T> = {
  data: T
  left: TreeItem<T>
  right: TreeItem<T>
} | null

type Compare<T> = (current: T, inserted: T) => number

const createTree = <T>(): Tree<T> => null

const itemsCount = <T>(tree: Tree<T>) => 0

const addItem = <T>(tree: Tree<T>, data: T, compare: Compare<T>): Tree<T> => {
  if (tree === null) {
    return { data, left: null, right: null }
  }
  const compareResult = compare(tree.data, data)
  if (compareResult < 0) {
    return {
      data: tree.data,
      left: addItem(tree.left, data, compare),
      right: tree.right,
    }
  } else if (compareResult > 0) {
    return {
      data: tree.data,
      left: tree.left,
      right: addItem(tree.right, data, compare),
    }
  } else {
    return tree
  }
}

const printTree = <T>(tree: Tree<T>, sign: string = ""): void => {
  if (tree === null || tree.data === null) return
  console.log(sign, tree.data)
  printTree(tree.left, sign.concat("- "))
  printTree(tree.right, sign.concat("- "))
}

export { createTree, itemsCount, addItem, printTree }
