import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostSummary from './PostSummary'
import { sortByVote } from '../utils/sort_orders'
import { openPostModal, deletePost } from '../actions/index'
import PostModal from './PostModal'

class PostList extends Component {
    render() {
        return <div className="postList">
            {this.props.match.params.category && <button onClick={this.props.openPostModal}>Add Post: {this.props.match.params.category}</button>}

            {this.props.posts.map((post) => {
                return <PostSummary post={post} key={post.id} onVoteUp={this.onVoteUp} onVoteDown={this.onVoteDown} openPostModal={this.props.openPostModal} deletePost={this.props.deletePost} />
            })}
            <PostModal category={this.props.match.params.category} />
        </div>

    }
}

const mapStateToProps = (state, props) => {
    let posts = []
    if (props.match.params.category) {
        posts = state.posts.filter((p) => p.category === props.match.params.category)
    } else {
        posts = state.posts
    }
    return ({
        posts: posts.filter((p) => !p.deleted).sort(state.sortOrder ? state.sortOrder : sortByVote)
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (dataSource) => dispatch(dataSource),
        openPostModal: (post) => dispatch(openPostModal(post)),
        deletePost: (post) => dispatch(deletePost(post))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList)