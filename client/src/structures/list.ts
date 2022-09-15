type List = ListItem | null

interface ListItem {
  data: string
  next: ListItem | null
}

function createList(): List {
  return null
}

function prepend(list: List, data: string): List {
  return {
    data: data,
    next: list,
  }
}

// refine, prints undefined
function printList(list: List): void {
  if (list === null) return
  process.stdout.write(list.data + ", ")
  printList(list.next)
}

function mapList(
  list: List,
  callback: (item: ListItem["data"]) => ListItem["data"]
): List | null {
  if (list === null) return null
  list.data = callback(list.data)
  list.next = mapList(list.next, callback)
  return list
}