import React, { Component } from 'react'
import PostList from './PostList'
import { fetchCategory } from '../actions/index'
class Category extends Component {

    render() {
        return <PostList />
    }
}

export default Category