// This file is to configure rules
// https://www.npmjs.com/package/eslint-plugin-tailwindcss#eslintconfigjs

// ! This is the DEFAULT in V9 but I can use it starting from ESLint v8.57.0.
// -> Learn more at https://eslint.org/docs/latest/use/configure/configuration-files-new

import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import { configs } from "eslint-plugin-tailwindcss";
import ts from "typescript-eslint";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...configs["flat/recommended"],
  eslintConfigPrettier,
];
