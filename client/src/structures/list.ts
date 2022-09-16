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

function printList(list: List): void {
  process.stdout.write(listToString(list) + "\n")
}

function listToString(list: List): string {
  if (list === null) return ''
  if (list.next === null) return list.data
  return list.data + ", " + listToString(list.next)
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

function forEachList(list: List, callback: (item: ListItem["data"]) => ListItem["data"]): void {
  if (list === null) return
  callback(list.data)
  forEachList(list.next, callback)
}

function first(list: List): ListItem["data"] | undefined {
  if (list === null) return
  return list.data
}

function last(list: List): ListItem["data"] | undefined {
  if (list === null) return
  if (list.next === null) return list.data
  return last(list.next)
}

function find(list: List, item: ListItem["data"]): List | false | undefined {
  if (list === null) return
  if (list.data === item) return list.data
  if (list.next === null) return false
  return find(list.next, item)
}

function remove(list: List, item: ListItem["data"]): List | null | undefined {
  if (list === null) return
  if (list.next === null) return list
  if (list.next.data === item) list.next = list.next.next
  return remove(list.next, item)
}
