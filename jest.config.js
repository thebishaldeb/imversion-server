module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  globalSetup: "./__tests__/config/globalSetup.ts",
  globalTeardown: "./__tests__/config/globalTeardown.ts",
  testMatch: ["**/__tests__/modules/**/?(*.)+(test).+(ts|tsx|js)"],
  collectCoverageFrom: [
    "src/(models|resolvers|typeDefs)/**/*.ts",
    "__tests__/**/*.ts",
  ],
  testPathIgnorePatterns: ["node_modules", "dist"],
};
