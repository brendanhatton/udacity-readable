import React, { Component } from 'react'
import CommentLink from './CommentLink'

class Post extends Component {
    render() {
        const post = this.props.post
        return <div className="post">
            <h2 key={post.id}>{post.title}</h2>
            <p>{post.author}
            <span>Vote count {post.voteScore}
                <button onClick={(e) => this.props.onVoteUp(post, e)}>up</button>
                <button onClick={(e) => this.props.onVoteDown(post, e)}>down</button>
            </span>
            </p>
            <CommentLink post={post}/>
        </div>
    }
}

export default Post