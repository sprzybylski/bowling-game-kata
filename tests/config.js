require.config({
    baseUrl: '/base/src',

    deps: [
        '/base/tests/GameTest.js'
    ],

    paths: {
        'chai': '../node_modules/chai/chai'
    },

    callback: window.__karma__.start
});

mocha.setup('tdd');
