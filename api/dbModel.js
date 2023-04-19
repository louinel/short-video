import mongoose from "mongoose";

const shortVideoShema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String
})

export default mongoose.model("shortVideos", shortVideoShema);