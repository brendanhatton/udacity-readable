import { combineReducers } from 'redux'

import {
    ADD_RECIPE,
    // REMOVE_FROM_CALENDAR
} from '../actions'

function food(state = {}, action) {
//     switch (action.type) { //TODO
//         case ADD_RECIPE:
//             const { recipe } = action

//             return {
//                 ...state,
//                 [recipe.label]: recipe,
//             }
//         default:
//             return state
//     }
    return state
}


const initialState = {
}


function calendar(state = {}, action) {
    //TODO
    return state
}

export default combineReducers({
    food,
    calendar
})