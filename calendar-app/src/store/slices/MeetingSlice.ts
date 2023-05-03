import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

export interface MeetingState {
  client: string;
  date: string;
  time: string;
  duration: number;
  location: string;
  service: string;
  fee: number;
}

const initialState: MeetingState[] = [];

const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    addMeeting(state, action) {
      state.push(action.payload);
    },
    getMeeting(state, action) {
      action.payload.forEach((meet: any) => {
        state.push(meet);
      });
    },
  },
});

export default meetingSlice.reducer;

export const { addMeeting, getMeeting } = meetingSlice.actions;
