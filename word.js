const Letter = require('./letter.js');

module.exports = class Word {
    word;
    letters = [];
    update = () => {
        this.word = '';
        this.letters.forEach(letter => {
            this.word += letter.getChar();
        });
    };
    write = () => {
        process.stdout.write("\u001b[2J\u001b[0;0H");
        console.log(this.word);
    };
    guess = (guessed_letter) => {
        this.letters.forEach(letter => {
            letter.check(guessed_letter);
        });
        this.update();
    };
    constructor(word) {
        word.split('').forEach(letter => {
            this.letters.push(new Letter(letter));
        })
        this.update();
    };
}