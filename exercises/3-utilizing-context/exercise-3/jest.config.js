module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src/tests'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/js/**/*.js'],
};