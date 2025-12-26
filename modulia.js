import * as loaders from './src/loaders/index.js'
import { extname } from "@std/path"

export async function load(filePath) {
  const ext = extname(filePath).slice(1) // quitar el punto
  const loader = loaders[ext]
  if (!loader) {
    throw new Error(`No loader found for extension: .${ext}`)
  }
  return await loader(filePath)
}
