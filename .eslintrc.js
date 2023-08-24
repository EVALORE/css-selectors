module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  plugins: ['prettier', 'import', '@typescript-eslint'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: true,
    tsconfigRootDir: './tsconfig.json',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    'import/extensions': 'off',
    // 'import/no-unresolved': 'off',
  },
  ignorePatterns: ['*.js'],
};
