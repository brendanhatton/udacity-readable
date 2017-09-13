import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostSummary from './PostSummary'
import * as actions from '../actions/index'
import PostModal from './PostModal'
import SortPicker from './SortPicker'

class PostList extends Component {
    render() {
        const category = this.props.category
        return <div>
            {category && <button onClick={this.props.openPostModal}>Add Post: {category}</button>}
            <SortPicker />
            <div className="post-list">
                {this.props.posts.map((post) => {
                    return <PostSummary post={post} key={post.id} onVoteUp={this.onVoteUp} onVoteDown={this.onVoteDown} openPostModal={this.props.openPostModal} deletePost={this.props.deletePost} category={category} />
                })}
            </div>
            <PostModal category={category} />
        </div>

    }
}

const mapStateToProps = (state, props) => {
    return ({
        posts: state.posts.sort(state.sortOrder)
    })
}

export default connect(mapStateToProps, actions)(PostList)