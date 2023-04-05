module.exports = {
  //rootDir: "./to-do-list-front",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMocks.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  globals: {
    "babel-jest": {
      configFile: "babel.config.js", // caminho para o arquivo babel.config.js
    },
  },
};
