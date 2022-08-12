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
        next: list
    }
}

function printList(list: List): void {
    if (list === null)  {
        return
    }
    process.stdout.write(list.data + ", ")
    printList(list.next)
}