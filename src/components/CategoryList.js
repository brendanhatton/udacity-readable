import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCategories} from '../actions/index'

class CategoryList extends Component {
    componentDidMount = () => {
        console.log('component did mount')
        this.props.fetchData()
    }
    render() {
        return <div className="book">
            {this.props.categories.map((cat) => {
                return <div key={cat.path}>{cat.name}</div>
            })}
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)