import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main.replace('.js', '.esm.js'), format: 'esm' },
    { file: pkg.main, format: 'cjs' },
  ],
  plugins: [
    nodeResolve(),
    babel({
      presets: ['@babel/preset-react'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
  external: ['react'],
}
