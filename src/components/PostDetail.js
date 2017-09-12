import React, { Component } from 'react'
import Vote from './Vote'
import { connect } from 'react-redux'
// import { fetchPost, openCommentModal, openPostModal, deleteComment } from '../actions/index'
import * as actions from '../actions/index'
import CommentDetail from './CommentDetail'
import CommentModal from './CommentModal'
import The404Page from './The404Page'
import PostModal from './PostModal'
import SortPicker from './SortPicker'

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.editPost = this.editPost.bind(this)
    }

    componentDidMount = () => {
        this.props.fetchPost(this.props.match.params.id)
    }

    editPost() {
        this.props.openPostModal(this.props.post)
    }

    render() {
        const post = this.props.post
        if (!post || post.length === 0 || post.error) {
            return <The404Page />
        } else {
            return <div className="post-list">
                <div className="post">
                    <div className="post-header">
                        <h3 key={post.id}>{post.title}</h3>

                        <button className="icon edit" onClick={this.editPost} />
                    </div>
                    <p>Category: {post.category}</p>
                    <p>{post.body}</p>
                    <p>Author: {post.author} <Vote voteable={post} voteableType='posts' /></p>
                    <hr />
                    <h3>Comments</h3>
                    <SortPicker />
                    <button onClick={this.props.openCommentModal}>Add Comment</button>
                    <div className="comments">
                        {this.props.comments && this.props.comments.map((comment) => {
                            return <CommentDetail key={comment.id} comment={comment} openCommentModal={this.props.openCommentModal} deleteComment={this.props.deleteComment} />
                        })}

                    </div>
                    <CommentModal post={post} />
                    <PostModal category={post.category} post={post} />
                </div>
            </div>
        }

    }
}



const mapStateToProps = (state, props) => ({
    post: state.selectedPost,
    comments: state.selectedPost.comments ? state.selectedPost.comments.filter((c) => !c.deleted).sort(state.sortOrder) : []
})

export default connect(mapStateToProps, actions)(PostDetail)