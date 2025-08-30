import { Schema } from "mongoose"

const WatchlistSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

export { WatchlistSchema };