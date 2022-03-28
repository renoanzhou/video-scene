import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import resolve from '@rollup/plugin-node-resolve';

const packageName = process.env.packageName;
const outputPrefix = `dist/${packageName}/${packageName}`;

// const packagesList = {

// }

export default [
  {
    input: {
      radio: './packages/radio/src/index.ts',
      limitSeek: './packages/limitSeek/src/index.ts'
    },
    output: [
      {
        // format: 'umd',
        dir: '/dist',
        entryFileNames: '[name].js'
      }
    ],
    plugins: [
      resolve(),
      eslint({
        throwOnError: true
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      terser()
    ]
  }
];
