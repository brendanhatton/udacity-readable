import React, { Component } from 'react'
import { sendVote } from '../actions/index'
import { connect } from 'react-redux'

class Vote extends Component {
    render() {
        const post = this.props.post
        return <span className="vote-area">
            <span className="post-meta">Vote count {post.voteScore}
                <button onClick={(e) => this.onVoteUp(post, e)}>up</button>
                <button onClick={(e) => this.onVoteDown(post, e)}>down</button>
            </span>
        </span>
    }

    onVoteUp = (post, e) => {
        e.preventDefault()
        console.log("vote up")
        this.props.vote(post, 'upVote')
    }


    onVoteDown = (post, e) => {
        e.preventDefault()
        console.log("vote down")
        this.props.vote(post, 'downVote')
    }
}

const mapStateToProps = (state, props) => ({
    // posts: state.posts.sort(state.sortOrder ? state.sortOrder : sortByVote)
});

const mapDispatchToProps = (dispatch) => {
    return {
        vote: (post, voteString) => dispatch(sendVote(post, voteString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote)