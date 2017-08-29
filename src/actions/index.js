import * as ReadableAPIUtil from '../utils/readable_api_util';

// export const ADD_RECIPE = 'ADD_RECIPE'
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
// export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

// export function addRecipe({day, recipe, meal}) {
//     return {
//         type: ADD_RECIPE,
//         recipe,
//         day,
//         meal
//     }
// }

// export function removeFromCalendar ({day, meal}) {
//     return {
//         type: REMOVE_FROM_CALENDAR,
//         day,
//         meal
//     }
// }





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

