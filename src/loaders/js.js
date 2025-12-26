import { importModule } from "jsr:@brad-jones/jsr-dynamic-imports@^0.1.2"

export default async function (filePath) {
  const module = (await importModule(filePath)).default
  return typeof module === "function" ? module : () => module
}
