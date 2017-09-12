import * as ReadableAPIUtil from '../utils/readable_api_util';
import { fetchPost, fetchPosts, openPostModal, closePostModal, createPost, deletePost, updatePost } from './posts'
import { openCommentModal, closeCommentModal, createComment, deleteComment, updateComment, fetchComments } from './comments'
import { receiveCategory, receiveCategories, fetchCategory, fetchCategories, fetchCategoryPosts } from './categories'
import { vote, sendVote } from './votes'
import { changeSortOrder } from './sortOrder'

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

export {
    fetchPost, fetchPosts, openPostModal, closePostModal, createPost, deletePost, updatePost,
    openCommentModal, closeCommentModal, createComment, updateComment, deleteComment, fetchComments,
    receiveCategory, receiveCategories, fetchCategory, fetchCategories, fetchCategoryPosts,
    vote, sendVote,
    changeSortOrder
}