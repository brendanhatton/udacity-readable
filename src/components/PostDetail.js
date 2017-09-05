import React, { Component } from 'react'
import Vote from './Vote'
import { connect } from 'react-redux'
import { fetchPost, openCommentModal, openPostModal, deleteComment } from '../actions/index'
import CommentDetail from './CommentDetail'
import CommentModal from './CommentModal'
import PostModal from './PostModal'
import { sortByVote } from '../utils/sort_orders'

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.editPost = this.editPost.bind(this)
    }

    componentDidMount = () => {
        this.props.fetchData(this.props.match.params.id)
    }

    editPost() {
        this.props.openPostModal(this.props.post)
    }

    render() {
        const post = this.props.post
        return <div className="post">
            <h2 key={post.id}>{post.title}</h2>
            <p>Category: {post.category}</p>
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
            <button onClick={this.editPost}>edit</button>
            <p>
                <Vote voteable={post} voteableType='posts' />
            </p>
            <h3>Comments</h3>
            <button onClick={this.props.openCommentModal}>Add Comment</button>
            <div className="comments">
                {this.props.comments && this.props.comments.sort(sortByVote).map((comment) => {
                    return <CommentDetail key={comment.id} comment={comment} openCommentModal={this.props.openCommentModal} deleteComment={this.props.deleteComment} />
                })}

            </div>
            <CommentModal post={post} />
            <PostModal category={post.category} post={post} />
        </div>
    }
}



const mapStateToProps = (state, props) => ({
    post: state.selectedPost,
    comments: state.selectedPost.comments ? state.selectedPost.comments.filter((c) => !c.deleted).sort(sortByVote) : []
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(fetchPost(id)),
        openCommentModal: (comment) => dispatch(openCommentModal(comment)),
        openPostModal: (post) => dispatch(openPostModal(post)),
        deleteComment: (comment) => dispatch(deleteComment(comment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)