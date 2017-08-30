import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, sendVoteUp } from '../actions/index'
import Post from './Post'

class PostList extends Component {
    componentDidMount = () => {
        this.props.fetchData()
    }
    render() {
        return <div className="postList">
            {this.props.posts.map((post) => {
                return <Post post={post} key={post.id} onVoteUp={this.onVoteUp} onVoteDown={this.onVoteDown} />
            })}
        </div>
    }

    onVoteUp = (post, e) => {
        e.preventDefault()
        console.log("vote up")
        this.props.voteUp(post)
    }


    onVoteDown = (post, e) => {
        e.preventDefault()
        console.log("vote down")
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.posts.sort(function (a, b) { return b.voteScore - a.voteScore })
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchPosts()),
        voteUp: (post) => dispatch(sendVoteUp(post))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList)