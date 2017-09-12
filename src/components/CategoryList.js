import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, fetchCategoryPosts, fetchPosts } from '../actions/index'
import { NavLink } from 'react-router-dom'

class CategoryList extends Component {
    componentDidMount = () => {
        this.props.fetchData()
    }
    render() {
        return <div className="category-list">
            <NavLink exact onClick={() => this.props.fetchPosts()} to='/' key='home' className="category-link">home</NavLink>
            {this.props.categories.map((cat) => {
                return <NavLink onClick={() => this.props.fetchCategoryPosts(cat.path)} to={'/' + cat.path} className="category-link" activeClassName="active" key={cat.path}>{cat.name}</NavLink>
            })}
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.categories.sort((a, b) => a.name > b.name ? 1 : 0)
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchCategories()),
        fetchPosts: () => dispatch(fetchPosts()),
        fetchCategoryPosts: (url) => dispatch(fetchCategoryPosts(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
    pure: false
})(CategoryList)
