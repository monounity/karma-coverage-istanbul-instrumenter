const path = require("path");

module.exports = function(config) {
    config.set({

        frameworks: ["jasmine"],

        files: [
            { pattern: "**/*.js", type: "module" },
        ],

        preprocessors: {
            "**/!(*.spec).js": ["karma-coverage-istanbul-instrumenter"]
        },

        coverageIstanbulInstrumenter: {
            esModules: true
        },

        reporters: ["progress", "coverage-istanbul"],

        coverageIstanbulReporter: {
            reports: ["html"],
            dir: path.join(__dirname, "coverage"),
        },

        browsers: ["ChromeHeadless"],

        singleRun: true
    });
};
