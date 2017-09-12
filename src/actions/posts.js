import * as ReadableAPIUtil from '../utils/readable_api_util';
import { receiveCategory } from './index'
import { fetchComments } from './index'
import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    OPEN_POST_MODAL,
    CLOSE_POST_MODAL,
    RECEIVE_CREATE_POST,
    RECEIVE_UPDATE_POST
} from './index'

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