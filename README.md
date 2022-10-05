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

- [ ] reduce
- [x] make map not mutate the initial value
- [ ] make list item generic (also complex types)
- [ ] listToString uses reduce
- [ ] pass callback to find, and not the item, and return list.data (not the list)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- [ ] remove should be not mutating!