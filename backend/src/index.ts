import express from 'express';
import cors from 'cors'; // Add this line
import path from 'path';
import gameRoutes from './api/gameRoutes';

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../src')));

// API routes
app.use('/api', gameRoutes);

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src', 'index.html')); // For Next.js
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});