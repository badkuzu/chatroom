// NOTE: No function have to be mutating

// First Implement Binary tree
// Add elment as high as possible first place possble

type Tree<T> = TreeItem<T> | null

type Data<T> = T | null

type TreeItem<T> = { data: Data<T>, left: TreeItem<T>; right: TreeItem<T> } | null

const createTree = <T>(
	data: Data<T> = null,
): Tree<T> => {
  return { data, left: null, right: null }
}

const itemsCount = (tree: Tree<unknown>) => 0

const addItem = <T>(tree: Tree<T>, element: TreeItem<T>): Tree<T> => null

export { createTree, itemsCount, addItem }
