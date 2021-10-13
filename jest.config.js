module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["./jest.setup.ts"],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};
