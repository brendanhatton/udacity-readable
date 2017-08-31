import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, fetchCategoryPosts, fetchPosts } from '../actions/index'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
    componentDidMount = () => {
        this.props.fetchData()
        this.props.fetchPosts()
    }
    render() {
        return <div className="categoryList">
        <Link onClick={() => this.props.fetchPosts()} to='/' className="category-link" key='home'>home</Link>
            {this.props.categories.map((cat) => {
                return <Link onClick={() => this.props.fetchCategoryPosts(cat.path)} to={'/'+cat.path} className="category-link" key={cat.path}>{cat.name}</Link>
            })}
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchCategories()),
        fetchPosts: () => dispatch(fetchPosts()),
        fetchCategoryPosts: (url) => dispatch(fetchCategoryPosts(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)