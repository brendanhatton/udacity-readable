import {
    RECEIVE_CATEGORY,
    RECEIVE_POSTS,
    RECEIVE_POST,
    VOTE,
    RECEIVE_COMMENTS,
    OPEN_POST_MODAL,
    CLOSE_POST_MODAL,
    RECEIVE_CREATE_POST,
    RECEIVE_UPDATE_POST
} from '../actions'

export const posts = (state = [], action) => {
    let posts = []
    switch (action.type) {
        case RECEIVE_POSTS:
            posts = action.posts
            break
        case RECEIVE_CREATE_POST:
            let updatedPosts = state.slice()
            updatedPosts.push(action.post)
            posts = updatedPosts
            break
        case RECEIVE_UPDATE_POST:
            let updatedSinglePost = state.slice().filter((p) => p.id !== action.post.id)
            let originalPost = state.slice().filter((p) => p.id === action.post.id)
            updatedSinglePost.push({
                ...action.post,
                comments: originalPost[0].comments.filter((c) => !c.deleted)
            })
            posts =  updatedSinglePost
            break
        case RECEIVE_CATEGORY:
            posts = action.posts
            break
        case VOTE:
            posts =  state.map(item => {
                return (updatePostOrComment(item, action))
            })
            break
        case RECEIVE_COMMENTS:
            posts = state.map(item => {
                if (item.id !== action.post.id) {
                    return item
                } else {
                    return {
                        ...item,
                        comments: action.comments.filter((c) => !c.deleted)
                    }
                }
            })
            break
        default:
            posts = state
    }
    return posts.filter((p) => !p.deleted)
}

export const updatePostOrComment = (item, action) => {
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
                    comments: updatedComments.filter((c) => !c.deleted)

                }
            }
            return item
        })
    }
    return item
}

export const selectedPost = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_POST:
            return action.post
        case RECEIVE_COMMENTS:
            return {
                ...state,
                comments: action.comments.filter((c) => !c.deleted)
            }
        case RECEIVE_UPDATE_POST:
            return {
                ...action.post,
                comments: state.comments.filter((c) => !c.deleted)
            }
        case VOTE:
            return updatePostOrComment(state, action)
        default:
            return state
    }
}

export const postModalOpen = (state = { open: false }, action) => {
    switch (action.type) {
        case OPEN_POST_MODAL:
            return { open: true, post: action.post }
        case CLOSE_POST_MODAL:
            return { open: false }
        default:
            return state
    }
}