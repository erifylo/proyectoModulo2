const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const attendeeSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId/* , ref: 'Event'  */},
  userId: { type: Schema.Types.ObjectId/* , ref: 'User'  */},
  assistance: Boolean
});

const Attendee = mongoose.model("Attendee", attendeeSchema);

module.exports = Attendee;