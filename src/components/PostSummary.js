import React, { Component } from 'react'
import CommentLink from './CommentLink'
import Vote from './Vote'
import { Link } from 'react-router-dom'

class PostSummary extends Component {
    constructor(props) {
        super(props);
        this.editPost = this.editPost.bind(this)
    }

    editPost() {
        this.props.openPostModal(this.props.post)
    }

    render() {
        const post = this.props.post
        return <div className="post">
            <h2 key={post.id}>{post.title}</h2>
            <Link to={{
                pathname: `/posts/${post.id}`,
                state: { fromDashboard: true }
            }}>{post.title} </Link>



            <p>Author: {post.author} <button onClick={this.editPost}>edit</button></p>
            <p>
                <Vote voteable={post} voteableType='posts' />
                <CommentLink post={post} />
            </p>

        </div>
    }
}

export default PostSummary