import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import resolve from '@rollup/plugin-node-resolve';

const packageName = process.env.packageName;
const outputPrefix = `dist/${packageName}/${packageName}`;

console.log(packageName, outputPrefix);

export default [
  {
    input: `./packages/${packageName}/src/index.ts`,
    output: [
      {
        name: `${packageName}`,
        file: `${outputPrefix}.umd.js`,
        format: 'umd'
      },
      { file: `${outputPrefix}.cjs.js`, format: 'cjs' },
      { file: `${outputPrefix}.es.js`, format: 'es' }
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
