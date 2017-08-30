export const fetchCategories = () => {
    console.log('fetch categories from API')
    return fetch('http://localhost:5001/categories', { headers: { 'Authorization': 'my-secret' } })
}

export const fetchPosts = () => {
    console.log('fetch posts from API')
    return fetch('http://localhost:5001/posts', { headers: { 'Authorization': 'my-secret' } })
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