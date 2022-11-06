import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  channelId: null,
  channelName: null,
};
export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const channelReducer = channelSlice.reducer;
export const { setChannelInfo } = channelSlice.actions;
export const selectChannel = (state) => state.channel;
