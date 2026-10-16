// Karma configuration, see https://karma-runner.github.io/latest/config/configuration-file.html
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
    ],
    client: {
      jasmine: {},
      clearContext: false, // keep the Jasmine HTML reporter output visible in the browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // remove duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/nailuj-portfolio'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['Chrome'],
    customLaunchers: {
      // Headless Chrome for CI containers, where the sandbox is not available.
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    restartOnFileChange: true,
  });
};
