module.exports = {
  verbose: true,
  rootDir: '../',
  setupFiles: ['./config/setupTests.js'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
}