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
      // state.data.filter((sub) => sub.id !== action.payload.id)
      state.data.splice(action.payload.id - 1, 1); 
    }
  },
});

export const { addSubmission, removeSubmission } = submissionSlice.actions;

export default submissionSlice.reducer;
