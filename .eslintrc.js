module.exports = {
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  root: true,
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['import', 'react', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src/components', 'react-native'], // caminho para o diretório onde estão seus componentes
      },
    },
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
  },
}
