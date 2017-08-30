import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCategories} from '../actions/index'
import Category from './Category'

class CategoryList extends Component {
    componentDidMount = () => {
        this.props.fetchData()
    }
    render() {
        return <div className="categoryList">
            {this.props.categories.map((cat) => {
                return <Category cat={cat} key={cat.path} />
            })}
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.categories.categories
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)