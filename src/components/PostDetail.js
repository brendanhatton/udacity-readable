import React, { Component } from 'react'
import Vote from './Vote'
import { connect } from 'react-redux'
import { fetchPost, sendVote } from '../actions/index'
import CommentDetail from './CommentDetail'

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
                <Vote post={post} />
            </p>
            <h3>Comments</h3>
            <div className="comments">
                {post.comments && post.comments.map((comment) => {
                    return <CommentDetail key={comment.id} comment={comment} />
                })}

            </div>
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    post: state.selectedPost
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(fetchPost(id)),
        vote: (post, voteString) => dispatch(sendVote(post, voteString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)