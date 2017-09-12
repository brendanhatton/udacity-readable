import React, { Component } from 'react'
import PostList from './PostList'
import { fetchPosts } from '../actions/index'
import { connect } from 'react-redux'

class RootPostList extends Component {
    componentDidMount = () => {
        this.props.fetchPosts()
    }

    render() {
        return <PostList />
    }
}

const mapStateToProps = (state, props) => {
    return {}
}

export default connect(mapStateToProps, { fetchPosts })(RootPostList)