const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/meandemo';
mongoose.connect(MONGO_URL)
.then(() => console.log('Mongo connected'))
.catch(err => console.error('Mongo error: ', err.message));
const app = express();
app.use(cors());
app.get('/api/health', (req, res) => {
res.json({ ok: true, time: new Date().toISOString() });
});
const PORT = 3000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
