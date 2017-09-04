import * as ReadableAPIUtil from '../utils/readable_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY"
export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"
export const VOTE = "VOTE"
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const OPEN_COMMENT_MODAL = "OPEN_COMMENT_MODAL"
export const CLOSE_COMMENT_MODAL = "CLOSE_COMMENT_MODAL"

export const receiveCategories = (categories) => {
    return ({
        type: RECEIVE_CATEGORIES,
        categories
    });
}

export const fetchCategories = () =>
    dispatch => (
        ReadableAPIUtil
            .fetchCategories()
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(receiveCategories(responseJson.categories))
            })
            .catch((error) => {
                console.error(error);
            })
    )

export const receiveCategory = (posts) => {
    return ({
        type: RECEIVE_CATEGORY,
        posts
    });
}

export const fetchCategoryPosts = (url) =>
    dispatch => (
        ReadableAPIUtil
            .fetchCategory(url)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(receiveCategory(responseJson))
                responseJson.map((post) => {
                    return dispatch(fetchComments(post))
                })
            })
            .catch((error) => {
                console.error(error);
            })
    )


export const receivePosts = (posts) => {
    return ({
        type: RECEIVE_POSTS,
        posts
    });
}

export const fetchPosts = () =>
    dispatch => (
        ReadableAPIUtil
            .fetchPosts()
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(receivePosts(responseJson))
                responseJson.map((post) => {
                    return dispatch(fetchComments(post))
                })
            })
            .catch((error) => {
                console.error(error);
            })
    )


export const receivePost = (post) => {
    return ({
        type: RECEIVE_POST,
        post
    });
}

export const fetchPost = (id) =>
    dispatch => (
        ReadableAPIUtil
            .fetchPost(id)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(receivePost(responseJson))
                dispatch(fetchComments(responseJson))
            })
            .catch((error) => {
                console.error(error);
            })
    )

export const vote = (voteable) => {
    return ({
        type: VOTE,
        voteable
    });
}

export const sendVote = (voteable, voteString, voteableType) =>
    dispatch => (
        ReadableAPIUtil
            .vote(voteable, voteString, voteableType)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(vote(responseJson))
            })
            .catch((error) => {
                console.error(error);
            })
    )

export const receiveComments = (post, comments) => {
    return ({
        type: RECEIVE_COMMENTS,
        post,
        comments
    });
}

export const fetchComments = (post) =>
    dispatch => (
        ReadableAPIUtil
            .fetchComments(post)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(receiveComments(post, responseJson))
            })
            .catch((error) => {
                console.error(error);
            })
    )

export const openCommentModal = () => ({
    type: OPEN_COMMENT_MODAL
})

export const closeCommentModal = () => ({
    type: CLOSE_COMMENT_MODAL
})

export const createComment = (comment) => {
    let postId = comment.post.id
    return dispatch => (
        ReadableAPIUtil
            .createComment(comment)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('closing modal')
                dispatch(fetchPost(postId))
                dispatch(closeCommentModal())
            })
            .catch((error) => {
                console.error(error);
            })

    )
}