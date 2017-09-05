import React, { Component } from 'react'
import Vote from './Vote'
import { connect } from 'react-redux'
import { fetchPost, openCommentModal } from '../actions/index'
import CommentDetail from './CommentDetail'
import CommentModal from './CommentModal'
import { sortByVote } from '../utils/sort_orders'

class PostDetail extends Component {
    componentDidMount = () => {
        this.props.fetchData(this.props.match.params.id)
    }

    render() {
        const post = this.props.post
        return <div className="post">
            <h2 key={post.id}>{post.title}</h2>
            <p>Category: {post.category}</p>
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
            <p>
                <Vote voteable={post} voteableType='posts' />
            </p>
            <h3>Comments</h3>
            <button onClick={this.props.openCommentModal}>Add Comment</button>
            <div className="comments">
                {post.comments && post.comments.sort(sortByVote).map((comment) => {
                    return <CommentDetail key={comment.id} comment={comment} openCommentModal={this.props.openCommentModal}/>
                })}

            </div>
            <CommentModal post={post}/>
        </div>
    }
}



const mapStateToProps = (state, props) => ({
    post: state.selectedPost
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(fetchPost(id)),
        openCommentModal: (comment) => dispatch(openCommentModal(comment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)