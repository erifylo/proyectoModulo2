const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  location: String,
  type: {type: String, enum: ['conference', 'meet up', 'courses', 'talks','other']},
  image: String,
  limit: Number,
  creator: Schema.Types.ObjectId,

}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;