import React, { Component } from 'react'
import Vote from './Vote'

class CommentDetail extends Component {
    render() {
        const comment = this.props.comment
        return <div>
            <p>{comment.body}</p>
            ({comment.author}, {new Date(comment.timestamp).toLocaleString()})
             <Vote voteable={comment} voteableType='comments' />
        </div>

    }
}

export default CommentDetail