const rule = {
  'no-trailing-spaces': ['error', { skipBlankLines: true }],
  'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
  // 'eslint no-plusplus': ['error', { allowForLoopAfterthoughts: false }],
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  // 'eol-last': 'off', // No sirve
};

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    ...rule,
  },
};
