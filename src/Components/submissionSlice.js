import { createSlice } from "@reduxjs/toolkit"

export const submissionSlice =  createSlice({
    name: 'submissions',
     initialState : {
        data: [],
    },
    reducers: {
        addSubmission: (state, action) => {
            state.data.push( action.payload) 
        }
    }
})


export const {addSubmission} = submissionSlice.actions

export default submissionSlice.reducer