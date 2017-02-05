//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome' // chrome, firefox ...
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine', // jasmine, mocha ...

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
