import * as SortOrders from '../utils/sort_orders'

import {
    CHANGE_SORT_ORDER
} from '../actions'


export const sortOrder = (state = SortOrders.sortByVote, action) => {
    switch (action.type) {
        case CHANGE_SORT_ORDER:
            switch (action.order) {
                case 'date':
                    return SortOrders.sortByDate
                case 'votes':
                    return SortOrders.sortByVote
                default:
                    return SortOrders.sortByVote
            }
        default:
            return state
    }
}