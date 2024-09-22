const express = require('express');
const router = express.Router();

// Example route
router.get('/api', (req, res) => {
    res.send('API route working');
});

router.get('/', (req, res) => {
    res.send('hello');
});

module.exports = router;
