const { SpecReporter } = require('jasmine-spec-reporter');
var HtmlReporter = require('protractor-angular-screenshot-reporter');


exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/web/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  resultJsonOutputFile: './reports/report.json',  
  directConnect: true,
/*  baseUrl: 'http://localhost:4200/',*/
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

  cucumberOpts: {
    format: ['json:reports/results.json', 'pretty'],
    require: ['features/*/*/steps.js','features/support/*.js'],
    tags: true,
    profile: false,
    'no-source': true
  },

  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
 /*   jasmine.getEnv().addReporter(
      new HtmlReporter({
      baseDirectory: './reports/screenshots'
      , metaDataBuilder: function metaDataBuilder(spec, descriptions, results, capabilities) {
        // Return the description of the spec and if it has passed or not:
        return {
           description: descriptions.join(' ')
           , passed: results.passed()
        };
     }
     , preserveDirectory: false
    }).getJasmine2Reporter());*/
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
