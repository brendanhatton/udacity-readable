import { combineReducers } from 'redux'

import {
    RECEIVE_CATEGORIES,
    RECEIVE_CATEGORY,
    RECEIVE_POSTS,
    RECEIVE_POST,
    VOTE,
    RECEIVE_COMMENTS,
    OPEN_COMMENT_MODAL,
    CLOSE_COMMENT_MODAL
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
                return (updatePostOrComment(item, action))
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

function updatePostOrComment(item, action) {
    if (item.id === action.voteable.id) { //ie match a post object
        item = {
            ...item,
            voteScore: action.voteable.voteScore
        }
    } else if (item.comments) { //look for a comment
        item.comments.map((comment) => {
            if (comment.id === action.voteable.id) {
                let newComment = {
                    ...comment,
                    voteScore: action.voteable.voteScore
                }
                let copiedComments = item.comments.slice()
                let updatedComments = copiedComments.filter((c) => c.id !== comment.id)
                updatedComments.push(newComment)
                item = {
                    ...item,
                    comments: updatedComments

                }
                return item
            }
        })
    }
    return item
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
            return updatePostOrComment(state, action)
        default:
            return state
    }
}

function commentModalOpen(state = false, action) {
    switch (action.type) {
        case OPEN_COMMENT_MODAL:
            return true
        case CLOSE_COMMENT_MODAL:
            return false
        default:
            return state
    }


}

export default combineReducers({
    categories,
    posts,
    selectedPost,
    commentModalOpen
})