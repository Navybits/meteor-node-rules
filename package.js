Npm.depends({
  'node-rules': '3.1.0'
});
Package.describe({
  name: 'navybits:meteor-node-rules',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'simple wrapper on node-rules npm package made for meteor use',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Navybits/meteor-node-rules',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  api.mainModule('meteor-node-rules.js');
  api.export('MeteorRules');
});

Package.onTest(function(api) {
});
