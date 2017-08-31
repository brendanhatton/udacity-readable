import React, { Component } from 'react'
import PostList from './PostList'
import { fetchCategory } from '../actions/index'
class Category extends Component {

    render() {
        //return <PostList dataSource={fetchCategory(this.props.match.params.category)} />
        return <PostList />
    }
}

export default Category