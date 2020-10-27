const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const attendeeSchema = new Schema({
  eventId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
}, {
    timestamps: true
});

const Attendee = mongoose.model("Attendee", attendeeSchema);

module.exports = Attendee;