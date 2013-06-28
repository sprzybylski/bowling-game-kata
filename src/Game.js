define(function () {
    var Game = function () {
        this.throws = [];
    };

    Game.prototype.roll = function (pins) {
        this.throws.push(pins);
    };

    Game.prototype.getScore = function () {
        var score = 0;

        for (var i = 0; i < this.throws.length - 1;) {
            if (this.throws[i] === 10) { // strike
                if (this.throws[i + 2]) {
                    score = score + 10 + this.throws[i + 1] + this.throws[i + 2];
                }
                i += 1;
            } else if ((this.throws[i] + this.throws[i + 1]) === 10) { // spare
                score = score + 10 + this.throws[i + 2];
                i += 2;
            } else {
                score = score + this.throws[i] + this.throws[i + 1];
                i += 2;
            }
        }

        return score;
    };

    return Game;
});
