import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cors from "cors";
import Videos from './dbModel.js';

// App config
dotenv.config();
const app = express();
const port = process.env.PORT || 9000;
const connection_url = process.env.MONGODB_URI;

// Middlewares
app.use(express.json());
app.use(Cors());

// Database Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).json("Hello Neel");
});

app.post('/v2/posts', async (req, res) => {
    const video = new Videos ({
        url: req.body.url,
        channel: req.body.channel,
        description: req.body.description,
        song: req.body.song,
        likes: req.body.likes,
        shares: req.body.shares,
        messages: req.body.messages
    })

    try {
        const newVideo = await video.save();
        res.status(201).json(newVideo);
    } catch (err) {
        res.status(500).json(err);
    }
})

app.get('/v2/posts', async (req, res) => {
    try {
        const video = await Videos.find();
        res.status(200).json(video);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Listener
app.listen(port, () => console.log(`Listening on port ${port}`));
