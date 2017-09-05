import * as ReadableAPIUtil from '../utils/readable_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY"
export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"
export const VOTE = "VOTE"
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const OPEN_COMMENT_MODAL = "OPEN_COMMENT_MODAL"
export const CLOSE_COMMENT_MODAL = "CLOSE_COMMENT_MODAL"
export const OPEN_POST_MODAL = "OPEN_POST_MODAL"
export const CLOSE_POST_MODAL = "CLOSE_POST_MODAL"
export const RECEIVE_CREATE_POST = "RECEIVE_CREATE_POST"
export const RECEIVE_UPDATE_POST = "RECEIVE_UPDATE_POST"
export const CHANGE_SORT_ORDER = "CHANGE_SORT_ORDER"

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

export const openCommentModal = (comment) => ({
    type: OPEN_COMMENT_MODAL,
    comment
})

export const closeCommentModal = () => ({
    type: CLOSE_COMMENT_MODAL
})

export const openPostModal = (post) => ({
    type: OPEN_POST_MODAL,
    post
})

export const closePostModal = () => ({
    type: CLOSE_POST_MODAL
})

export const receiveCreatePost = (post) => ({
    type: RECEIVE_CREATE_POST,
    post
})
export const receiveUpdatePost = (post) => ({
    type: RECEIVE_UPDATE_POST,
    post
})
export const createComment = (comment) => {
    let postId = comment.post.id
    return dispatch => (
        ReadableAPIUtil
            .createComment(comment)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(fetchPost(postId))
                dispatch(closeCommentModal())
            })
            .catch((error) => {
                console.error(error);
            })

    )
}

export const updateComment = (comment) => {
    let postId = comment.post.id
    return dispatch => (
        ReadableAPIUtil
            .updateComment(comment)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(fetchPost(postId))
                dispatch(closeCommentModal())
            })
            .catch((error) => {
                console.error(error);
            })

    )
}

export const deleteComment = (comment) => {
    let postId = comment.parentId
    return dispatch => (
        ReadableAPIUtil
            .deleteComment(comment)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(fetchPost(postId))
            })
            .catch((error) => {
                console.error(error);
            })

    )
}


export const createPost = (post) => {
    return dispatch => (
        ReadableAPIUtil
            .createPost(post)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(receiveCreatePost(responseJson))
                dispatch(closePostModal())
            })
            .catch((error) => {
                console.error(error);
            })
    )
}

export const updatePost = (post) => {
    return dispatch => (
        ReadableAPIUtil
            .updatePost(post)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(receiveUpdatePost(responseJson))
                dispatch(closePostModal())
            })
            .catch((error) => {
                console.error(error);
            })

    )
}


export const deletePost = (post, category) => {
    return dispatch => (
        ReadableAPIUtil
            .deletePost(post)
            .then((response) =>
                category ? dispatch(fetchCategoryPosts(post.category))
                    :
                    dispatch(fetchPosts())
            )
            .catch((error) => {
                console.error(error);
            })

    )
}

export const changeSortOrder = (order) => ({
    type: CHANGE_SORT_ORDER,
    order
})