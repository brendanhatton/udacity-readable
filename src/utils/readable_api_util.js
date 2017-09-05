const uuidv4 = require('uuid/v4');

export const fetchCategories = () => {
    console.log('fetch categories from API')
    return fetch('http://localhost:5001/categories', { headers: { 'Authorization': 'my-secret' } })
}

export const fetchCategory = (url) => {
    console.log('fetch category ' + url + ' from API')
    return fetch(`http://localhost:5001/${url}/posts`, { headers: { 'Authorization': 'my-secret' } })
}

export const fetchPosts = () => {
    console.log('fetch posts from API')
    return fetch('http://localhost:5001/posts', { headers: { 'Authorization': 'my-secret' } })
}

export const fetchPost = (id) => {
    console.log('fetch post ' + id + '  from API')
    return fetch(`http://localhost:5001/posts/${id}`, { headers: { 'Authorization': 'my-secret' } })
}

export const vote = (post, voteString, voteableType) => {
    console.log('calling vote')
    return fetch(`http://localhost:5001/${voteableType}/${post.id}`,
        {
            headers: {
                'Authorization': 'my-secret',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ option: voteString })
        }
    )
}

export const fetchComments = (post) => {
    console.log('fetch comments from API')
    return fetch(`http://localhost:5001/posts/${post.id}/comments`, { headers: { 'Authorization': 'my-secret' } })
}

export const createComment = (comment) => {
    console.log('create comment from API')
    comment.timestamp = Date.now()
    comment.id = uuidv4()
    comment.parentId = comment.post.id
    comment.post = null //no need to serialize
    comment.author = comment.owner //api documentation is wrong
    return fetch(`http://localhost:5001/comments/`,
        {
            headers: {
                'Authorization': 'my-secret',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(comment)
        })
}


export const updateComment = (comment) => {
    console.log('update  comment from API')
    comment.timestamp = Date.now()
    comment.parentId = comment.post.id
    comment.post = null //no need to serialize
    comment.author = comment.owner //api documentation is wrong
    return fetch(`http://localhost:5001/comments/${comment.id}`,
        {
            headers: {
                'Authorization': 'my-secret',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(comment)
        })
}