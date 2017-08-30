import { combineReducers } from 'redux'

import {
    RECEIVE_CATEGORIES,
    RECEIVE_POSTS
} from '../actions'

function categories(state = [], action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            // const categories = action.categories
            return action.categories
        default:
            return state
    }
}

function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            // const posts = action.posts
            return action.posts
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
})