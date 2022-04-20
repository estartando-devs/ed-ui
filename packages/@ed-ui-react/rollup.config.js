import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { babel } from '@rollup/plugin-babel'

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      freeze: false,
      esModule: true,
    },
    {
      file: packageJson.module,
      format: "es",
      sourcemap: true,
      freeze: false,
      esModule: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfigDefaults: {
        exclude: [
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.spec.tsx',
          '**/*.test.tsx',
        ],
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          jsx: 'react',
        },
      },
      tsconfigOverride: {
        compilerOptions: {
          target: 'esnext',
        },
      },
      typescript: require('typescript'),
    }),
    postcss({
      extensions: ['.css']
    }),
    babel({
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'runtime',
      include: 'src/**/*',
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            loose: true,
          },
        ],
      ],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ]
};
