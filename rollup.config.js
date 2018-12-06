import path from 'path'
import gitr from 'git-rev-sync'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const version = (() => {
  let v = '0.0.0'
  try {
    v = gitr.branch()
    // branch like: publish/1.1.0
    v = v.indexOf('publish/') > -1 ? v.replace(/publish\//, '') : '0.0.0'
  } catch (e) {}
  return v
})()
const path_resolve = (p) => path.resolve(__dirname, './', p)

export default {
  input: path_resolve('src/index.js'),
  output: {
    file: path_resolve('dist/main.js'),
    name: "IOING",
    format: 'es',
    sourcemap: true,
    banner: `/* IOING-library version ${version} */`,
    footer: '/* follow me on Github! @ioing */'
  },
  plugins: [
    babel({
      babelrc: false,
      presets: [['env', { modules: false }]],
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      runtimeHelpers: true
    }),
    resolve()
  ]
}
