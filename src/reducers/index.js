import { combineReducers } from 'redux'

import {
    RECEIVE_CATEGORIES,
    RECEIVE_POSTS,
    VOTE_UP
} from '../actions'

function categories(state = [], action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories
        default:
            return state
    }
}

function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case VOTE_UP:
            return state.map(item => {
                if (item.id !== action.post.id) {
                    return item
                } else {
                    return action.post
                }
            })
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
})