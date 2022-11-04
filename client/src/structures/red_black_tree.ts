type Tree<T> = {
  data: T
  left: Tree<T>
  right: Tree<T>
	color: "black" | "red"
} | null

type Compare<T> = (current: T, inserted: T) => number

const createTree = <T>(): Tree<T> => null

const itemsCount = <T>(tree: Tree<T>) => 0

// the first item should satisfy another color condition
const addItem = <T>(tree: Tree<T>, data: T, compare: Compare<T>): Tree<T> => {
	if (tree === null) {
    return { data, left: null, right: null, color: "black" }
	}
	return addItemRecursive(tree, data, compare)
}

const addItemRecursive = <T>(tree: Tree<T>, data: T, compare: Compare<T>): Tree<T> => {
  if (tree === null) {
    return { data, left: null, right: null, color: "red" }
  }
  const compareResult = compare(tree.data, data)
  if (compareResult > 0) {
    return {
      data: tree.data,
      left: addItemRecursive(tree.left, data, compare),
      right: tree.right,
			color: tree.color
    }
  } else if (compareResult < 0) {
    return {
      data: tree.data,
      left: tree.left,
      right: addItemRecursive(tree.right, data, compare),
			color: tree.color
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
