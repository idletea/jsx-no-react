import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/module.js',
  output: [{
    file: 'dist/main.iife.js',
    format: 'iife',
    exports: 'named',
    name: 'JSXNoReact'
  }, {
    file: 'dist/module.es6.js',
    format: 'es',
  }],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
};
