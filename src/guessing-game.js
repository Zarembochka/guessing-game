class GuessingGame {

    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.min === this.max) {
            return this.max;
        }
        this.value = Math.round((this.min + this.max) / 2);
        return this.value;
    }

    lower() {
        this.max = this.value;
    }

    greater() {
        this.min = this.value;
    }
}

module.exports = GuessingGame;
