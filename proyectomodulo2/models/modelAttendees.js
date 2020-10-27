const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const AttendeeSchema = new Schema({
  // averiguar que hay que poner aqui :D
}, {
    timestamps: true
});

const Attendee = mongoose.model("Attendee", AttendeeSchema);

module.exports = Attendee;