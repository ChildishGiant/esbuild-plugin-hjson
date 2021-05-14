# esbuild-plugin-hjson
An esbuild plugin to handle human json files.


### Install

```zsh
npm install esbuild-plugin-hjson -D
```
```zsh
yarn add esbuild-plugin-hjson -D
```


### Use

`esbuild.config.json`

```js
const esbuild = require('esbuild')
const hjson = require('esbuild-plugin-hjson')

esbuild.build({
  bundle: true,
  entryPoints: ['main.js'],
  outfile: 'out.js',
  plugins: [
    hjson()
  ]
}).catch(() => process.exit(1))
```

and in your js...

```js
const someJSON = require('example.hjson')
```

On build this will then be processed into machine-readable standard JSON.