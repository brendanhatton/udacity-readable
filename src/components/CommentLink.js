import React, { Component } from 'react'

class CommentLink extends Component {
    render() {
        const post = this.props.post
        return <span className="commentLink">
            ({post.comments ? post.comments.length : 0}) Comments
        </span>
    }
}

export default CommentLink