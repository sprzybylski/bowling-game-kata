define(
    [
        'Game',
        'chai'
    ],
    function (Game, chai) {
        'use strict';

        var assert = chai.assert;

        suite('Bowling Game', function () {
            setup(function () {
                this.game = new Game();
            });
        });
    }
);
