import { model } from "mongoose";

import { WatchlistSchema } from "../schemas/WatchlistSchema.js";

const WatchlistModel = model("Watchlist", WatchlistSchema);

export { WatchlistModel };