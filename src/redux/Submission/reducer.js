import { ADD_SUB, REMOVE_SUB } from "./actionType";


const initialState = {
    submissions : [],
}

const subReducer = (state = initialState, action ) => {
    const {type, payload} = action

    switch(type) {
        case ADD_SUB:
            const modifiedSub =  state.submissions.push(payload)
            return {...state,submissions: modifiedSub}
        case REMOVE_SUB:
            const newSub = state.submissions.filter((sub) => sub.id !== payload.id)
            return {...state, submissions: newSub}
        default:
            return state;
    }
}

export {subReducer  }