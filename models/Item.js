const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Float = require("mongoose-float").loadType(mongoose);

const ItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  bookings: [{type: Schema.Types.ObjectId, ref: 'Booking'}],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rate: {
    type: Float,
    required: true,
  },
} , { timestamps: true });

module.exports = Item = mongoose.model("item", ItemSchema);
