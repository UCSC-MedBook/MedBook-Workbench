Package.describe({
  summary: "Draw sample pie chart clinical data summaries.",
  version: "1.0.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.export('pie_charts', 'client');
  api.addFiles('sample-pie-charts.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sample-pie-charts');
  api.addFiles('sample-pie-charts-tests.js');
});
