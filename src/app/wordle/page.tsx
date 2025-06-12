"use client";

import React, { useState } from "react";

const ROWS = 6;
const COLS = 5;

const WordleGrid: React.FC = () => {
    // We'll store each guess as a string.
    const [guesses, setGuesses] = useState<string[]>([]);

    // This is a helper to render a single cell.
    const renderCell = (rowIndex: number, colIndex: number) => {
        // Get the guess for the current row (if it exists)
        const guess = guesses[rowIndex] || "";
        return (
            <div
                key={colIndex}
                className="border-2 w-12 h-12 flex items-center justify-center text-2xl uppercase"
            >
                {guess[colIndex] || ""}
            </div>
        );
    };

    // You might have an input field elsewhere to submit a guess.
    // For demonstration, here's a simple input and button that adds a guess.
    const [currentGuess, setCurrentGuess] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentGuess.length !== COLS) {
            alert(`Please enter a ${COLS}-letter word.`);
            return;
        }
        // Add the guess if we haven't reached the max rows.
        if (guesses.length < ROWS) {
            setGuesses([...guesses, currentGuess]);
            setCurrentGuess("");
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Grid display */}
            <div className="grid gap-2">
                {Array.from({ length: ROWS }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-2">
                        {Array.from({ length: COLS }).map((_, colIndex) =>
                            renderCell(rowIndex, colIndex)
                        )}
                    </div>
                ))}
            </div>

            {/* Input area for the user to submit guesses */}
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                <input
                    type="text"
                    value={currentGuess.toUpperCase()}
                    onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
                    maxLength={COLS}
                    className="border-2 p-2 text-center text-xl uppercase"
                />
                <button
                    type="submit"
                    className="border-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default WordleGrid;
