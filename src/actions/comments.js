import * as ReadableAPIUtil from '../utils/readable_api_util';

import { fetchPost } from './posts'

import {
    RECEIVE_COMMENTS,
    OPEN_COMMENT_MODAL,
    CLOSE_COMMENT_MODAL
} from './index'

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