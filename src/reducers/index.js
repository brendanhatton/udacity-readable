import { combineReducers } from 'redux'

import {
    RECEIVE_CATEGORIES,
    RECEIVE_POSTS,
    RECEIVE_POST,
    VOTE,
    RECEIVE_COMMENTS
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
        case VOTE:
            return state.map(item => {
                if (item.id !== action.post.id) {
                    return item
                } else {
                    return action.post
                }
            })
        case RECEIVE_COMMENTS:
            return state.map(item => {
                if (item.id !== action.post.id) {
                    return item
                } else {
                    return {
                        ...item,
                        comments: action.comments
                    }
                }
            })
        default:
            return state
    }
}

function selectedPost(state = [], action) {
    switch (action.type) {
        case RECEIVE_POST:
            return action.post
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
    selectedPost
})