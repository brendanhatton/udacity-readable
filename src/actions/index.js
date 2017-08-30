import * as ReadableAPIUtil from '../utils/readable_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const VOTE = "VOTE"

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
            })
            .catch((error) => {
                console.error(error);
            })
    )

export const vote = (post) => {
    return ({
        type: VOTE,
        post
    });
}

export const sendVote = (post, voteString) =>
    dispatch => (
        ReadableAPIUtil
            .vote(post, voteString)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(vote(responseJson))
            })
            .catch((error) => {
                console.error(error);
            })
    )