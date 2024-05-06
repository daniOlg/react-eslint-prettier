/// PLUGINS
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParserPlugin from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';

/// CONFIGS
import airbnbBaseBestPracticesConfig from 'eslint-config-airbnb-base/rules/best-practices';
import airbnbBaseErrorsConfig from 'eslint-config-airbnb-base/rules/errors';
import airbnbBaseEs6Config from 'eslint-config-airbnb-base/rules/es6';
// import airbnbBaseImportsConfig from 'eslint-config-airbnb-base/rules/imports';
import airbnbBaseNodeConfig from 'eslint-config-airbnb-base/rules/node';
import airbnbBaseStyleConfig from 'eslint-config-airbnb-base/rules/style';
import airbnbBaseVariablesConfig from 'eslint-config-airbnb-base/rules/variables';

import airbnbTsConfig from 'eslint-config-airbnb-typescript';

import prettierConfig from 'eslint-config-prettier';

export default [
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parser: typescriptParserPlugin,
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tailwindcssPlugin.configs.recommended.rules,
      ...airbnbBaseBestPracticesConfig.rules,
      ...airbnbBaseVariablesConfig.rules,
      ...airbnbBaseErrorsConfig.rules,
      // ...airbnbBaseImportsConfig.rules,
      ...airbnbBaseEs6Config.rules,
      ...airbnbBaseNodeConfig.rules,
      ...airbnbBaseStyleConfig.rules,
      ...airbnbTsConfig.rules,
      ...prettierConfig.rules,
    },
  },
];
