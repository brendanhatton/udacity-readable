import { combineReducers } from 'redux'

import {
    RECEIVE_CATEGORIES,
    RECEIVE_POSTS
} from '../actions'

const initialState = {
    categories: [],
    posts: []
}

function categories(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const categories = action.categories
            return {...state, categories: categories}
        case RECEIVE_POSTS:
            const posts = action.posts
            return {...state, posts: posts}
        default:
            return state
    }

}

export default combineReducers({
    categories,
    // food,
})