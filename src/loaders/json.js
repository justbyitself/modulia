export default async function (filePath) {
  const content = await Deno.readTextFile(filePath)
  const data = JSON.parse(content)
  return () => data
}