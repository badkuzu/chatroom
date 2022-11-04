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
// (can also be done through rebalancing function)
const addItem = <T>(tree: Tree<T>, data: T, compare: Compare<T>): Tree<T> => {
  if (tree === null) {
    return { data, left: null, right: null, color: "black" }
  }
  return rebalanceTree(addItemRecursive(tree, data, compare))
}

const addItemRecursive = <T>(
  tree: Tree<T>,
  data: T,
  compare: Compare<T>
): Tree<T> => {
  if (tree === null) {
    return { data, left: null, right: null, color: "red" }
  }
  const compareResult = compare(tree.data, data)
  if (compareResult > 0) {
    return {
      data: tree.data,
      left: rebalanceTree(addItemRecursive(tree.left, data, compare)),
      right: tree.right,
      color: tree.color,
    }
  } else if (compareResult < 0) {
    return {
      data: tree.data,
      left: tree.left,
      right: rebalanceTree(addItemRecursive(tree.right, data, compare)),
      color: tree.color,
    }
  } else {
    return tree
  }
}

const rebalanceTree = <T>(tree: Tree<T>): Tree<T> => {
  // check if the current subtree is balanced
  //
  // is the current element a grandparent and is black?
  // if no - return
  // if yes - can rebalance if needed

  // if one of children is red
  // 		check grandchildren of red child
  //		if none of grandchildren red, return
  // 		if yes
  // 		if other child black, rebalance
  // 		if other child red, recolour
	
  if (isElementGrandparent(tree) && tree?.color !== "red") {
    const childL = tree?.left
    const childR = tree?.right

    // TODO: refactor
    if (childL?.color === "red") {
      if (childL?.left?.color === "red" || childL?.right?.color === "red") {
        let other_child = childR
        if (other_child?.color === "red") return recolour(tree)
        return rebalance(tree)
      }
    }

    if (childR?.color === "red") {
      if (childR?.left?.color === "red" || childR?.right?.color === "red") {
        let other_child = childL
        if (other_child?.color === "red") return recolour(tree)
        return rebalance(tree)
      }
    }
  }

  return tree
}

const isElementGrandparent = <T>(tree: Tree<T>): boolean => {
  if (
    tree?.left?.left ||
    tree?.left?.right ||
    tree?.right?.left ||
    tree?.right?.right
  )
    return true
  return false
}

// wip
const recolour = <T>(tree: Tree<T>): Tree<T> => {
  console.log("recolour needed")
  return tree
}

// wip
const rebalance = <T>(tree: Tree<T>): Tree<T> => {
  console.log("rebalance needed")
  return tree
}

const printTree = <T>(tree: Tree<T>, sign: string = ""): void => {
  if (tree === null || tree.data === null) return
  console.log(sign, tree.data)
  printTree(tree.left, sign.concat("- "))
  printTree(tree.right, sign.concat("- "))
}

export { createTree, itemsCount, addItem, printTree }
