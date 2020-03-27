// (!) Warning: customize your rules wisely:
// eslint supposed to crash if you have at least one error in code

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  plugins: [
    "react",
    'babel',
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  rules: {
    "no-console":"warn",
  },
  // https://github.com/yannickcr/eslint-plugin-react#configuration
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
                                         // default to "createReactClass"
      pragma: 'React',  // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
      // (!) uncomment line down below to run flow correctly
      //'flowVersion': '0.53', // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { 'property': 'freeze', 'object': 'Object' },
      { 'property': 'myFavoriteWrapper' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
};