import { combineReducers } from 'redux'

import {
    RECEIVE_CATEGORIES,
    RECEIVE_CATEGORY,
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
        case RECEIVE_CATEGORY:
            return action.posts
        case VOTE:
            return state.map(item => {
                if (item.id !== action.post.id) {
                    return item
                } else {
                    return {
                        ...item,
                        voteScore: action.post.voteScore
                    }
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
        case RECEIVE_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case VOTE:
            return {
                ...state,
                voteScore: action.post.voteScore
            }
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
    selectedPost
})