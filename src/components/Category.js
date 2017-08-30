import React, { Component } from 'react'

class Category extends Component {
    render() {
        const cat = this.props.cat
        return <a className="category-link" href={cat.path} key={cat.path}>{cat.name}</a>
    }
}

export default Category