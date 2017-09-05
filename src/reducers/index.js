import { combineReducers } from 'redux'

import {
    RECEIVE_CATEGORIES,
    RECEIVE_CATEGORY,
    RECEIVE_POSTS,
    RECEIVE_POST,
    VOTE,
    RECEIVE_COMMENTS,
    OPEN_COMMENT_MODAL,
    CLOSE_COMMENT_MODAL,
    OPEN_POST_MODAL,
    CLOSE_POST_MODAL,
    RECEIVE_CREATE_POST,
    RECEIVE_UPDATE_POST
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
        case RECEIVE_CREATE_POST:
            let updatedPosts = state.slice()
            updatedPosts.push(action.post)
            return updatedPosts
        case RECEIVE_UPDATE_POST:
            let updatedSinglePost = state.slice().filter((p) => p.id !== action.post.id)
            updatedSinglePost.push(action.post)
            return updatedSinglePost
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
            }
            return item
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

function commentModalOpen(state = { open: false }, action) {
    switch (action.type) {
        case OPEN_COMMENT_MODAL:
            return { open: true, comment: action.comment }
        case CLOSE_COMMENT_MODAL:
            return { open: false }
        default:
            return state
    }
}

function postModalOpen(state = { open: false }, action) {
    switch (action.type) {
        case OPEN_POST_MODAL:
            return { open: true, post: action.post }
        case CLOSE_POST_MODAL:
            return { open: false }
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
    selectedPost,
    commentModalOpen,
    postModalOpen
})