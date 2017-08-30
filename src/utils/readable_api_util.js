export const fetchCategories = () => {
    console.log('fetch categories from API')
    return fetch('http://localhost:5001/categories', { headers: { 'Authorization': 'my-secret' } })
}

export const fetchPosts = () => {
    console.log('fetch posts from API')
    return fetch('http://localhost:5001/posts', { headers: { 'Authorization': 'my-secret' } })
}