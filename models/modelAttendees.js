const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const attendeeSchema = new Schema({
  eventId: Schema.Types.ObjectId,
  userId: Schema.Types.ObjectId,
  assistance: Boolean
});

const Attendee = mongoose.model("Attendee", attendeeSchema);

module.exports = Attendee;