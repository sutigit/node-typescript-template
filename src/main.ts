// Template stuff

export default class Main {
    private word: string;

    constructor(word: string) {
        this.word = word;
    }

    public getWord(): string {
        return this.word;
    }
}

const main = new Main('Hello, World!');
console.log(main.getWord());