const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Float = require("mongoose-float").loadType(mongoose);

const ItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
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
  bookings: [
    {
      startDate: {type: Date, required: true},
      endDate: {type: Date, required: true},
      days: {type: Number, required: true},
      totalPrice: {type: Float, required: true},
      user: {type: Schema.Types.ObjectId, ref: 'User'},
    }, { timestamps: true }
  ],
} , { timestamps: true });

module.exports = Item = mongoose.model("item", ItemSchema);
