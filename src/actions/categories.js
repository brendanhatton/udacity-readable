import * as ReadableAPIUtil from '../utils/readable_api_util';

import {
    RECEIVE_CATEGORIES,
    RECEIVE_CATEGORY
} from './index'
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
