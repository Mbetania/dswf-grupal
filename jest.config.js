export const testEnvironment = 'jsdom';
export const setupFilesAfterEnv = ['<rootDir>/src/__tests__/setupTests.js'];
export const moduleNameMapper = {
    '\\.(css|scss)$': 'identity-obj-proxy',
};