import { assertEquals } from "@std/assert"
import { load } from '../modulia.js'

const resolve = path => new URL(path, import.meta.url).pathname

Deno.test("load function loads and parses .yaml correctly", async () => {
  const loaderFn = await load(resolve('./fixtures/yaml/sample.yaml'))
  const data = await loaderFn()
  assertEquals(data, {key: "value"})
})

Deno.test("load function loads and parses .yml correctly", async () => {
  const loaderFn = await load(resolve('./fixtures/yaml/sample.yml'))
  const data = await loaderFn()
  assertEquals(data, {key: "value"})
})
