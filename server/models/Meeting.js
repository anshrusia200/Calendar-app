const mongoose = require("mongoose");

const MeetingSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    enum: ["Location: Unassigned", "Telehealth: Video Office"],
    default: "Location: Unassigned",
    required: true,
  },
  service: {
    type: String,
    enum: ["90834 Psycotherapy, 45 min", "90837 Psycotherapy, 60 min"],
    default: "90834 Psycotherapy, 45 min",
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Meeting", MeetingSchema);
