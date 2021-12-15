module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: [2, 'never'],
    curly: [2, 'multi'],
  },
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
  parser: '@typescript-eslint/parser',
}
