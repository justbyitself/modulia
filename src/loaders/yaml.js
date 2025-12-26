import { parse } from "jsr:@std/yaml@1.0.10"

export default async function (filePath) {
  const content = await Deno.readTextFile(filePath)
  const data = parse(content)
  return () => data
}
