module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
  },
  overrides: [
    {
      // specify files to override
      files: ['*.vue', '*.js'],
      rules: {
        // override rules
        'max-len': 'off',
        // 'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'linebreak-style': 0,
      },
    },
  ],
};
