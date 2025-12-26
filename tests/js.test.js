import { assertEquals } from "@std/assert"
import { load } from '../modulia.js'

const resolve = path => new URL(path, import.meta.url).pathname

Deno.test("JS module exporting function with context returns object with message", async () => {
  const loaderFn = await load(resolve('./fixtures/js/context.js'))
  const result = await loaderFn({ someContext: "test" })
  assertEquals(result.message, "Context: test")
})

Deno.test("JS module exporting object returns object with value", async () => {
  const loaderFn = await load(resolve('./fixtures/js/object.js'))
  const result = await loaderFn()
  assertEquals(result.value, 42)
})

Deno.test("JS module exporting function without context returns object with message", async () => {
  const loaderFn = await load(resolve('./fixtures/js/noContext.js'))
  const result = await loaderFn()
  assertEquals(result.message, "No context")
})
