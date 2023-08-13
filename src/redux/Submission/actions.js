import { ADD_SUB, REMOVE_SUB } from "./actionType";

const addSubmission = (payload) => ({
    type:ADD_SUB,
    payload
})

const removeSubmission = (payload) => ({
    type:REMOVE_SUB,
    payload
})

export {addSubmission,removeSubmission}