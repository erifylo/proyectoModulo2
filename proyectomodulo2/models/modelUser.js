const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  nickname: String,
  email: String,
  password: String
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

module.exports = User;