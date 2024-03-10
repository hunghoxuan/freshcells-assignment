module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {},
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
}
