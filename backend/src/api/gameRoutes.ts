import express, { Request, Response, NextFunction } from 'express';
import { WordleGame } from '../wordleGame/game';

const router = express.Router();
let game: WordleGame | null = null; // Initialize as null

router.post('/start', (req: Request, res: Response) => {
    game = new WordleGame(); // Initialize a new game
    res.json({ message: "New game started!" });
});

router.post('/guess', (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!game) {
            throw new Error("Game not started. Please call /start first.");
        }
        const { guess } = req.body;
        if (!guess || typeof guess !== 'string') {
            throw new Error("Guess is required and must be a string.");
        }
        const result = game.submitGuess(guess.toUpperCase());
        res.json(result);
    } catch (error) {
        next(error);
    }
});

// Error-handling middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({ error: err.message });
});

export default router;