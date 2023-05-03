const express = require("express");
const router = express.Router();
const Meeting = require("../models/Meeting");

router.get("/allMeetings", async (req, res) => {
  try {
    const meetings = await Meeting.find();
    return res.json(meetings);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json("Please check console");
  }
});

router.post("/", async (req, res) => {
  try {
    const newMeeting = new Meeting({
      client: req.body.client,
      date: req.body.date,
      time: req.body.time,
      duration: req.body.duration,
      location: req.body.location,
      fee: req.body.fee,
    });

    const meeting = await newMeeting.save();
    res.send(meeting);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
