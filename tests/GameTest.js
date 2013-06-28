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

            test('Gutter game scores zero', function () {
                for (var i = 1; i <= 20; i++) {
                    this.game.roll(0);
                }

                assert.equal(0, this.game.getScore())
            });

            test('All onces scores 20', function () {
                for (var i = 1; i <= 20; i++) {
                    this.game.roll(1);
                }

                assert.equal(20, this.game.getScore());
            });

            test('One spare', function () {
                this.game.roll(5);
                this.game.roll(5);

                for (var i = 1; i <= 18; i++) {
                    this.game.roll(1);
                }

                assert.equal(10 + 1 + 18, this.game.getScore());
            });

            test('One strike', function () {
                this.game.roll(10);

                for (var i = 1; i <= 18; i++) {
                    this.game.roll(1);
                }

                assert.equal(10 + 1 + 1 + 18, this.game.getScore());
            });

            test('Max score', function () {
                for (var i = 1; i <= 12; i++) {
                    this.game.roll(10);
                }

                assert.equal(300, this.game.getScore());
            });
        });
    }
);
