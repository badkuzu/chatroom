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
  if (list === null) return ""
  if (list.next === null) return list.data
  return list.data + ", " + listToString(list.next)
}

function mapList(
  list: List,
  callback: (item: ListItem["data"]) => ListItem["data"]
): List {
  if (list === null) return null
  return { data: callback(list.data), next: mapList(list.next, callback) }
}

function forEachList(
  list: List,
  callback: (item: ListItem["data"]) => ListItem["data"]
): void {
  if (list === null) return
  callback(list.data)
  forEachList(list.next, callback)
}

function reduceList(
  list: List,
  callback: (
    previousValue: ListItem["data"] | null,
    currentValue: ListItem["data"] | null
  ) => ListItem["data"],
	previousValue: ListItem["data"] | null = null
): List {
  if (list === null) return null
	const newValue = callback(previousValue, list.data)
  return {
    data: newValue,
    next: reduceList(list.next, callback, newValue),
  }
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

function find(
  list: List,
  item: ListItem["data"]
): ListItem["data"] | false | undefined {
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

export default {
  createList,
  prepend,
  printList,
  listToString,
  mapList,
  forEachList,
  first,
  last,
  find,
  remove,
}
