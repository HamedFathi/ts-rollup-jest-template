module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'jsdom' /*'@happy-dom/jest-environment'*/,
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'js'],
  coverageReporters: ["text", "json", "html"]
};
