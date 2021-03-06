import React, { Component } from 'react'
import Vote from './Vote'

class CommentDetail extends Component {
    constructor(props) {
        super(props);
        this.editComment = this.editComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }

    editComment() {
        this.props.openCommentModal(this.props.comment)
    }

    deleteComment() {
        this.props.deleteComment(this.props.comment)
    }
    render() {
        const comment = this.props.comment
        return <div className="comment">
            <p>{comment.body}</p>
            ({comment.author}, {new Date(comment.timestamp).toLocaleString()})
            <button className="icon delete" onClick={this.deleteComment} />
            <button className="icon edit" onClick={this.editComment} />

            <p><Vote voteable={comment} voteableType='comments' /></p>

        </div>

    }
}

export default CommentDetail