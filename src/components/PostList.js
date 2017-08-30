import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import Post from './Post'

class PostList extends Component {
    componentDidMount = () => {
        this.props.fetchData()
    }
    render() {
        return <div className="postList">
            {this.props.posts.map((post) => {
                return <Post post={post} key={post.id} />
            })}
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.categories.posts
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList)