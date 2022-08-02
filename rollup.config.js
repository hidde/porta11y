import babel from '@rollup/plugin-babel'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main.replace('.js', '.esm.js'), format: 'esm' },
    { file: pkg.main, format: 'cjs' },
  ],
  plugins: [
    babel({
      presets: ['@babel/preset-react'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
  external: ['react'],
}
