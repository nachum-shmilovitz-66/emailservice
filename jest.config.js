module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    reporters: ['default', 'jest-junit'],
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig.json'
        }
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testPathIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/tests/**/*.spec.(ts|jsx|js|tsx)|**/__tests__/*.(ts|jsx|js|tsx)'],
    testURL: 'http://localhost/',
    testEnvironment: 'node',
    collectCoverageFrom: ['src/**/*.{ts,jsx,js,tsx}', '!src/dataAccess/validations/**'],
    coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
    coverageDirectory: 'build/coverage',
    coverageReporters: ['text', 'html', 'cobertura']
};
