import { WORDS } from './wordList';

export class WordleGame {
    private targetWord: string;
    private attemptsLeft: number;
    private guesses: string[];

    constructor() {
        this.targetWord = this.getRandomWord();
        this.attemptsLeft = 6;
        this.guesses = [];
    }

    private getRandomWord(): string {
        return WORDS[Math.floor(Math.random() * WORDS.length)];
    }

    public getTargetWord(): string {
        return this.targetWord;
    }

    public submitGuess(guess: string): { result: string; attemptsLeft: number; feedback?: string[]; targetWord?: string } {
        if (guess.length !== 5) {
            throw new Error("Guess must be 5 letters long.");
        }
        if (!/^[A-Za-z]+$/.test(guess)) {
            throw new Error("Guess must contain only letters.");
        }
        if (this.guesses.includes(guess)) {
            throw new Error("You've already guessed this word.");
        }

        this.guesses.push(guess);

        // Check if the guess is correct before decrementing attemptsLeft
        if (guess.toUpperCase() === this.targetWord.toUpperCase()) {
            return { result: "You win!", attemptsLeft: this.attemptsLeft };
        }

        this.attemptsLeft--; // Decrement attemptsLeft only if the guess is incorrect

        if (this.attemptsLeft === 0) {
            return { result: "You lose!", attemptsLeft: this.attemptsLeft, feedback: this.getFeedback(guess), targetWord: this.targetWord };
        }

        return { result: "Keep guessing", attemptsLeft: this.attemptsLeft, feedback: this.getFeedback(guess) };
    }

    private getFeedback(guess: string): string[] {
        const feedback: string[] = Array(guess.length).fill('⬛'); // Initialize feedback with ⬛
        const targetLetters = this.targetWord.toUpperCase().split('');
        const guessLetters = guess.toUpperCase().split('');

        // First pass: Mark correct letters (🟩)
        for (let i = 0; i < guessLetters.length; i++) {
            if (guessLetters[i] === targetLetters[i]) {
                feedback[i] = '🟩';
                targetLetters[i] = ''; // Mark this letter as matched
            }
        }

        // Second pass: Mark correct letters in the wrong position (🟨)
        for (let i = 0; i < guessLetters.length; i++) {
            if (feedback[i] === '🟩') {
                continue; // Skip already matched letters
            }
            const index = targetLetters.indexOf(guessLetters[i]);
            if (index !== -1) {
                feedback[i] = '🟨';
                targetLetters[index] = ''; // Mark this letter as matched
            }
        }

        return feedback;
    }
}