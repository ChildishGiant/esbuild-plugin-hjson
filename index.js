const hjson = require('hjson')
const path = require('path')
const fs = require('fs')

module.exports = options => {
  return {
    name: 'hjson',
    setup (build) {
      build.onResolve({ filter: /\.hjson$/ }, (args) => {
        return {
          path: path.resolve(args.resolveDir, args.path),
          namespace: 'hjson'
        }
      })
      build.onLoad({ filter: /.*/, namespace: 'hjson' }, (args) => {
        const result = fs.readFileSync(args.path, 'utf-8')
        const compiled = hjson.parse(result)
        const stringed = JSON.stringify(compiled)
        return {
          contents: stringed,
          loader: 'json'
        }
      })
    }
  }
}
