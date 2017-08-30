import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/index'

class CommentLink extends Component {
    componentDidMount = () => {
        this.props.fetchData(this.props.post)
    }
    render() {
        const post = this.props.post
        return <span className="commentLink">
            ({post.comments ? post.comments.length : 0}) Comments
        </span>
    }
}

const mapStateToProps = (state, props) => ({
    // categories: state.categories
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (post) => dispatch(fetchComments(post))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentLink)