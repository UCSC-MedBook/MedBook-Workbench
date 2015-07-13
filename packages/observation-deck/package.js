Package.describe({
    name : 'observation-deck',
    summary : 'Observation Deck visualizes multiple data types for a group of samples.',
    version : '1.0.0',
    git : ''
});

Package.onUse(function(api) {
    api.versionsFrom('0.9.0');
    api.use(['jquery']);

    api.export('observation_deck', 'client');
    api.export('u', 'client');
    api.addFiles('observation-deck.js', 'client');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('observation-deck');
    api.addFiles('observation-deck-tests.js');
});
