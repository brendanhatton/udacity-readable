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
            <div className="post-header">
                <Link to={{
                    pathname: `/${post.category}/${post.id}`,
                    state: { fromDashboard: true }
                }}><h3>{post.title}</h3></Link>
                <button className="icon delete" onClick={this.deletePost} />
                <button className="icon edit" onClick={this.editPost} />
            </div>
            <p>Author: {post.author} </p>
            <p>
                <CommentLink post={post} />
                <Vote voteable={post} voteableType='posts' />
            </p>
            <hr />
        </div>
    }
}

export default PostSummary