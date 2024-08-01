const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    sessionName: { type: String },
    sessionPurpose: { type: String },
    sessionScore: { type: Number },
    sessionFeedback: { type: String },
  },
  { timestamps: true }
);

const Session = mongoose.model("Session", SessionSchema);
module.exports = Session;
