import { CHANGE_SORT_ORDER } from './index'

export const changeSortOrder = (order) => ({
    type: CHANGE_SORT_ORDER,
    order
})