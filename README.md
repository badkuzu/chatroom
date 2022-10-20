# 14.07
Tasks:

- [x] find examples of using algos + data structures in the context of chatroom features
    - chat history search
    - word stats
    - chat censoring
    - word autocomplete
    - list of users with their status
    - friends - show 1st degree, 2nd degree
    - group chat suggestion

- [x] migrate to typescript


# 28.07

data structures:
- trees
- lists

TODO:
- [x] implement a list data structure
- [ ] store messages in a list (in a variable)
- [ ] implement methods:
    - [x] find
    - [x] map
    - [x] forEach
    - [x] first
    - [x] last
    - [x] prepend
    - [ ] remove
    - [x] print

try not to google

null

{data: 'bla', next: null}

{
  data: 'bla',
  next: { data: 'blabla', next: null }
}

{
  data: 'bla',
  next: { data: 'blabla', next: { data: 'hello', next: null } }
}

does not modify list, but creates a new list
make it functional


TODO:
- [x] set up testing

- [x] reduce
- [x] make map not mutate the initial value
- [ ] make list item generic (also complex types)
- [ ] listToString uses reduce
- [ ] pass callback to find, and not the item, and return list.data (not the list)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- [ ] remove should be not mutating!

- [ ] reduce returns only the data, not the whole list
- [ ] look at reduce refernce at MDN
- [ ] do it TDD

expected prototype
const <T, Acc>reduce(List<T>: a, (acc: Acc, currentValue: T) => Acc, initialValue: Acc) => Acc

- [ ] refine the data types
type List<T> = ListItem<T> | null
type ListItem<T> = { data: T, next: List<T> }

test examples
1. reduce([], sum, 0) => 0
2. summing the length of items
accumulator doesn't have to be the same type as the list item! test it! like so:
reduce(['abc', 'cbd'], (acc, elem) => acc + elem.length, 0) -> 6


## TREE 🌳
trees make some operations more efficient
and some operations less efficient

a node in a tree has an arbitrary amount of children
a tree with maxinum of two children per node is a binary tree

TODO:
- [ ] finish test for create tree
- implement methods (TDD!)
	- [ ] add items (nearest available insertion spot)
	- [ ] print tree

	  print like this:
a
- e
- b
- - c
- d

##
- [ ] make a .toString function instead of print function
- [ ] use the .toString function to test other functionalities (hide implementation details!)
- [ ] implement 
a
- null
- b

## ⚖️ TREE BALANCING
Homework
- [ ] Implement AVL or red-black (!) balancing

## 🔎 SEARCH
The idea:
Store messages in a simple array
Store words in a tree with arrays containing refences to the positions of messages in the words array
In case of two words, perform two searches and then make an intersection of results to find messages that satisfy both searches