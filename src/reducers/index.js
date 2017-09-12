import { combineReducers } from 'redux'

import { categories } from './categories'
import { posts } from './posts'
import { selectedPost } from './posts'
import { postModalOpen } from './posts'
import { sortOrder } from './sortOrder'
import {commentModalOpen} from './comments'

export default combineReducers({
    categories,
    posts,
    selectedPost,
    commentModalOpen,
    postModalOpen,
    sortOrder
})