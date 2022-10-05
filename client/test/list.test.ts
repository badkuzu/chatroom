import { describe, expect, test } from "@jest/globals"
import list from "../src/structures/list"

const emptyList = list.createList()

describe("creating list", () => {
  test("of 0 elements", () => {
    expect(emptyList).toBeNull()
  })
})

describe("prepending list", () => {
  test("with one element", () => {
		const prependedList = list.prepend(emptyList, "element")
		console.log(prependedList)
    expect(prependedList).toMatchObject({data: "element", next: null})
  })
})
