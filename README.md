# Modulia

**Modulia** is a lightweight loader library for Deno that dynamically loads JavaScript and YAML modules with context support.

## Features

- Dynamic loading of JS modules with context passing
- YAML file parsing support
- Simple and extensible loader architecture

## Usage

Use `load` to dynamically import a module by its absolute path. The module must export a default value that is either:

- A **function** that receives a context object and returns an object, or
- An **object** directly.

### Example module exporting a function:

```javascript
export default function ({value}) {
  return {
    message: `Hello, from js! Context: ${value}!`
  }
}
```

### Example module exporting an object:
```javascript
export default {
  message: `Hello, from js!`
}
```

### Example YAML module
```yaml
message: Hello, from yaml!
```

### Example usage
```javascript
import { load } from "jsr:@justbyitself/modulia"

const module = await load("/absolute/path/to/module.js")
const result = await module({ value: "context value" })
```

## Testing

Run tests with:

```bash
deno task test
```

## TODO
  - More formats support (json, jsonc, hjson, toml...)
