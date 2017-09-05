import React, { Component } from 'react'
import CommentLink from './CommentLink'
import Vote from './Vote'
import { Link } from 'react-router-dom'

class PostSummary extends Component {
    constructor(props) {
        super(props);
        this.editPost = this.editPost.bind(this)
        this.deletePost = this.deletePost.bind(this)
    }

    editPost() {
        this.props.openPostModal(this.props.post)
    }

    deletePost() {
        this.props.deletePost(this.props.post, this.props.category)
    }

    render() {
        const post = this.props.post
        return <div className="post">
            <Link to={{
                pathname: `/posts/${post.id}`,
                state: { fromDashboard: true }
            }}><h2>{post.title}</h2></Link><button onClick={this.deletePost}>delete</button>

            <p>Author: {post.author} <button onClick={this.editPost}>edit</button></p>
            <p>
                <Vote voteable={post} voteableType='posts' />
                <CommentLink post={post} />
            </p>

        </div>
    }
}

export default PostSummary