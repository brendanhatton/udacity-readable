import React, { Component } from 'react'

class CommentDetail extends Component {
    render() {
        const comment = this.props.comment
        return <div>
            <p>{comment.body}</p>
             ({comment.author}, {Date(comment.timestamp)})
        </div>
    }
}

export default CommentDetail