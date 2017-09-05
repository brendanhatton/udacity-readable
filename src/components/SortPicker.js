import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSortOrder } from '../actions/index'

class SortPicker extends Component {
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return <div>
            <p>Sorted by:
            <select onChange={this.props.changeSortOrder}>
                    <option value="votes">votes</option>
                    <option value="date">date</option>
                </select>
            </p>
        </div>
    }
}
const mapStateToProps = (state, props) => {
    return {}
 }

const mapDispatchToProps = (dispatch) => {
    return {
        changeSortOrder: (event) => dispatch(changeSortOrder(event.target.value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPicker)