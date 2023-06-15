import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';
import copy from 'rollup-plugin-copy';
import svg from 'rollup-plugin-svg';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';

export default [
  // {
  //   input: './src/icons-react/index.ts',
  //   output: {
  //     dir: 'lib',
  //     format: 'cjs',
  //     entryFileNames: '[name].cjs.js',
  //   },
  //   external: ['react', 'react-dom'],
  //   plugins: [
  //     cleaner({
  //       targets: ['./lib/'],
  //     }),
  //     resolve(),
  //     commonjs(),
  //     typescript({
  //       tsconfig: 'tsconfig.json',
  //       jsx: 'react',
  //     }),
  //     svgr({ exportType: 'named', jsxRuntime: 'automatic' })
  //   ],
  // },
  {
    input: ['./src/icons-react/index.ts'],
    output: {
      dir: 'lib',
      format: 'esm',
      preserveModules: true,
    },
    external: ['react', 'react-dom'],
    plugins: [
      cleaner({
        targets: ['./lib/'],
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: 'tsconfig.json',
        jsx: 'react',
      }),
      url(),
      svgr(),
      terser(),
      copy({
        targets: [
          { src: './README.md', dest: 'lib' },
          { src: './LICENSE.txt', dest: 'lib' },
          {
            src: './package.json',
            dest: 'lib',
            transform: contents => {
              const parsedJson = JSON.parse(contents.toString());
              delete parsedJson.scripts;
              delete parsedJson.devDependencies;
              delete parsedJson.publishConfig;
              return JSON.stringify(parsedJson, null, 2);
            },
          },
          { src: './src/svg/*.svg', dest: 'lib/icons-svg/' },
        ],
      }),
    ],
  },
];
