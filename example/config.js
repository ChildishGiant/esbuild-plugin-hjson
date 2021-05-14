const esbuild = require('esbuild')
const hjson = require('../index')

esbuild.build({
  bundle: true,
  entryPoints: ['example/main.js'],
  outfile: 'example/out.js',
  plugins: [
    hjson()
  ]
}).catch(() => process.exit(1))
