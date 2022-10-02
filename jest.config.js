const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100, 
      lines: 100
    }
  }
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: [ 'node_modules', '<rootDir>/' ],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
