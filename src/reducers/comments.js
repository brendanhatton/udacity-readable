import {
    OPEN_COMMENT_MODAL,
    CLOSE_COMMENT_MODAL
} from '../actions'

export const commentModalOpen = (state = { open: false }, action) => {
    switch (action.type) {
        case OPEN_COMMENT_MODAL:
            return { open: true, comment: action.comment }
        case CLOSE_COMMENT_MODAL:
            return { open: false }
        default:
            return state
    }
}