import { model } from "mongoose";

import{OrderSchema} from "../schemas/OrderSchema.js";

const OrderModel = model("Order",OrderSchema);

export {OrderModel};