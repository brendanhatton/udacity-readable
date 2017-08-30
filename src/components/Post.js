import React, { Component } from 'react'

class Post extends Component {
    render() {
        const post = this.props.post
        return <div className="post">
        <h2 key={post.id}>{post.title}</h2>
        <p>{post.body}</p>
        </div>
    }
}

export default Post