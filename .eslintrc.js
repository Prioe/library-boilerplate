module.exports = {
  extends: 'standard',
  plugins: ['standard', 'promise'],
  rules: {
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
  },
};

