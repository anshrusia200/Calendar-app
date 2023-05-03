import axios from "axios";

import { MeetingState } from "../store/slices/MeetingSlice";

const instance = axios.create({
  baseURL: "https://calendar-backend-y8lh.onrender.com",
});

export const getAllMeetings = async () => {
  try {
    const res = await instance.get("/allMeetings");

    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
export const addNewMeeting = async (newMeeting: MeetingState) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(newMeeting);

    const res = await instance.post("/", body, config);

    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
