import { createSlice } from "@reduxjs/toolkit";


export const submissionSlice = createSlice({
  name: "submissions",
  initialState: {
    data: [
      
    ],
  },
  reducers: {
    addSubmission: (state, action) => {
      state.data.push(action.payload);
    },
    removeSubmission: (state, action) => {
      state.data.splice(action.payload, 1)
    }
  },
});

export const { addSubmission, removeSubmission } = submissionSlice.actions;

export default submissionSlice.reducer;
