import { combineReducers } from 'redux'

import {
    RECEIVE_CATEGORIES,
    // REMOVE_FROM_CALENDAR
} from '../actions'

function categories(state = [], action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const categories = action.categories
            return categories
        default:
            return state
    }

}


// function calendar(state = {}, action) {
//     //TODO
//     return state
// }

export default combineReducers({
    categories,
    // food,
    // calendar
})