const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/vanDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const vanSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    type: String,
    day: String,
    color: String,
    button: String
});

const Van = mongoose.model('Van', vanSchema);

// API endpoint to get all vans
app.get('/api/vans', async (req, res) => {
    try {
        const vans = await Van.find();
        res.json(vans);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// Get item by id
app.get('/api/vans/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const van = await Van.findById(id);
        res.json(van);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});



// New API endpont to add a van
app.post('/api/vans', async (req, res) =>{
    const van = new Van(req.body);
    try {
        const newVan = await van.save();
        res.status(201).json(newVan)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});