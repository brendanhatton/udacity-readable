import React, { Component } from 'react'
import PostList from './PostList'
import { fetchCategory } from '../actions/index'
class Category extends Component {

    render() {
        return <div>
            <button onClick={this.props.openCommentModal}>Add Post: {this.props.category}</button>
            <PostList />
        </div>
    }
}

export default Category