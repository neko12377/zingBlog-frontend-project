/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
const {defaults} = require('jest-config');
module.exports = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    transformIgnorePatterns: ['node_modules/(?!(kasper-design)/)'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
};