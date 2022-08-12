type List = ListItem | null

interface ListItem {
    data: string
    next: ListItem | null
}

function createList() {
    return null
}

function prepend(list: List, data: string) {
    return {
        data: data,
        next: list
    }
}