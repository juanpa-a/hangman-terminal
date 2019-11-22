module.exports = class Letter {
    isHidden = true;
    letter;
    getChar = () => {
        if(this.isHidden) {
            return '_';
        }
        return this.letter;
    };
    check = (letter) => {
        // console.log(`Guess: ${letter}\nAns: ${this.letter}`)
        if(letter === this.letter) {
            this.isHidden = false;

            console.log('correct guess!')
        };
    };
    constructor(letter) {
        this.letter = letter;
    };
}