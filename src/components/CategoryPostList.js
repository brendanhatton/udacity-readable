import React, { Component } from 'react'
import PostList from './PostList'
import { fetchCategoryPosts } from '../actions/index'
import { connect } from 'react-redux'

class CategoryPostList extends Component {
    componentDidMount = () => {
        this.props.fetchCategoryPosts(this.props.match.params.category)
    }
    render() {
        return <PostList category={this.props.match.params.category} />
    }
}

const mapStateToProps = (state, props) => {
    return {}
}



export default connect(mapStateToProps, { fetchCategoryPosts })(CategoryPostList)
