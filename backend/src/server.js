const express = require('express');

import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});