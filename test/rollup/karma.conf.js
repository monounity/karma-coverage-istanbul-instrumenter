const path = require("path");
const instrumenter = require("../..");

module.exports = function(config) {
    config.set({

        // This plugin configuration is required to run the instrumenter's test
        // suite. If you copy this example, you should remove the plugins entry
        // and just install karma-coverage-istanbul-instrumenter. It will be
        // picked up automatically by karma.
        plugins: [
            "karma-*",
            instrumenter,
        ],

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
            reports: ["html-spa"],
            dir: path.join(__dirname, "coverage"),
        },

        browsers: ["ChromeHeadless"],

        singleRun: true
    });
};
