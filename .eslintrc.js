module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', '@typescript-eslint'],
  rules: {
    'linebreak-style': ['off', 'windows'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/extensions': [1, 'never'],
    'import/no-unresolved': [2, { ignore: ['.*$'] }],
    'no-shadow': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'warn',
  },
};
