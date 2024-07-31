const Session = require("../models/sessionModel");
const Message = require("../models/messageModel");

exports.createSession = async (req, res) => {
  const { uid, sessionName, sessionPurpose, sessionScore, sessionFeedback } =
    req.body;
  try {
    const session = new Session({
      userId: uid,
      sessionName,
      sessionPurpose,
      sessionScore,
      sessionFeedback,
    });
    await session.save();
    res.status(200).json(session);
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getSessionDetails = async (req, res) => {
  const { sessionid } = req.params;
  try {
    const session = await Session.findById(sessionid);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    res.status(200).json(session);
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createMessage = async (req, res) => {
  const { sessionid, time, messages } = req.body;
  try {
    const message = new Message({ sessionid, time, messages });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMessages = async (req, res) => {
  const { sessionid } = req.params;
  try {
    const message = await Message.findOne({ sessionid });
    res.status(200).json(message);
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
