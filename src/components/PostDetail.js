import React, { Component } from 'react'
import Vote from './Vote'
import { connect } from 'react-redux'
import { fetchPost, sendVote } from '../actions/index'
import { Link } from 'react-router-dom'

class PostDetail extends Component {
    componentDidMount = () => {
        this.props.fetchData(this.props.match.params.id)
    }

    render() {
        const post = this.props.post ? this.props.post : {}
        return <div className="post">
        <Link to="/">Back to home page</Link>
            <h2 key={post.id}>{post.title}</h2>
            <p>Category: {post.category}</p>
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
            <p>
                <Vote post={post} />
            </p>
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