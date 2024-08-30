module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    testMatch: ["<rootDir>/Static/src/scripts/**/*.test.js"],
};
