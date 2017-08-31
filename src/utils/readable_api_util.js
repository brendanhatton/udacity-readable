export const fetchCategories = () => {
    console.log('fetch categories from API')
    return fetch('http://localhost:5001/categories', { headers: { 'Authorization': 'my-secret' } })
}

export const fetchCategory = (url) => {
    console.log('fetch category '+url+' from API')
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

export const vote = (post, voteString) => {
    console.log('calling vote')
    return fetch(`http://localhost:5001/posts/${post.id}`,
        {
            headers: {
                'Authorization': 'my-secret',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({option: voteString})
        }
    )
}


export const fetchComments = (post) => {
    console.log('fetch comments from API')
    return fetch(`http://localhost:5001/posts/${post.id}/comments`, { headers: { 'Authorization': 'my-secret' } })
}