import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import PostSummary from './PostSummary'

class PostList extends Component {
    componentDidMount = () => {
        this.props.fetchData()
    }
    render() {
        return <div className="postList">
            {this.props.posts.map((post) => {
                return <PostSummary post={post} key={post.id} onVoteUp={this.onVoteUp} onVoteDown={this.onVoteDown} />
            })}
        </div>
    }
}

const sortByVote = () => (a, b) => b.voteScore - a.voteScore

const mapStateToProps = (state, props) => ({
    posts: state.posts.sort(state.sortOrder ? state.sortOrder : sortByVote)
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList)