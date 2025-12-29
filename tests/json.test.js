import { assertEquals } from "@std/assert"
import { load } from '../modulia.js'

const resolve = path => new URL(path, import.meta.url).pathname

Deno.test("load function loads and parses .json correctly", async () => {
  const loaderFn = await load(resolve('./fixtures/json/sample.json'))
  const data = await loaderFn()
  assertEquals(data, {key: "value"})
})
