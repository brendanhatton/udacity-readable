import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostSummary from './PostSummary'
import * as actions from '../actions/index'
import PostModal from './PostModal'
import SortPicker from './SortPicker'

class PostList extends Component {
    render() {
        return <div>
            {this.props.match.params.category && <button onClick={this.props.openPostModal}>Add Post: {this.props.match.params.category}</button>}
            <SortPicker />
            <div className="post-list">
                {this.props.posts.map((post) => {
                    return <PostSummary post={post} key={post.id} onVoteUp={this.onVoteUp} onVoteDown={this.onVoteDown} openPostModal={this.props.openPostModal} deletePost={this.props.deletePost} category={this.props.match.params.category} />
                })}
            </div>
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
        posts: posts.filter((p) => !p.deleted).sort(state.sortOrder)
    })
}

export default connect(mapStateToProps, actions)(PostList)