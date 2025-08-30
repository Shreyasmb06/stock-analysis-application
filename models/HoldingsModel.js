import { model } from "mongoose";

import {HoldingsSchema}  from "../schemas/HoldingsSchema.js";

const HoldingsModel = model("Holding", HoldingsSchema);

export {HoldingsModel};