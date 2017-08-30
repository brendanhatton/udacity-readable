import React, { Component } from 'react'

class Category extends Component {
    render() {
        const cat = this.props.cat
        return <div key={cat.path}>{cat.name}</div>
    }
}

export default Category