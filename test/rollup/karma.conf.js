const path = require("path");

module.exports = function(config) {
    config.set({

        frameworks: ["jasmine"],

        files: [
            "bundle.js",
            "calculator.spec.js"
        ],

        preprocessors: {
            "**/!(*.spec).js": ["karma-coverage-istanbul-instrumenter"]
        },

        reporters: ["progress", "coverage-istanbul"],

        coverageIstanbulReporter: {
            skipFilesWithNoCoverage: true,
            reports: ["html"],
            dir: path.join(__dirname, "coverage"),
        },

        browsers: ["ChromeHeadless"],

        singleRun: true
    });
};
