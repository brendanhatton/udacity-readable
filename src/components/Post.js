import React, { Component } from 'react'

class Post extends Component {
    render() {
        const post = this.props.post
        return <div className="post">
            <h2 key={post.id}>{post.title}</h2>
            <p>{post.body}</p>
            <div>Vote count {post.voteScore}
                <button onClick={(e) => this.props.onVoteUp(post, e)}>up</button>
                <button onClick={(e) => this.props.onVoteDown(post, e)}>down</button>
            </div>
        </div>
    }
}

export default Post