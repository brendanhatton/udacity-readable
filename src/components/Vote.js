import React, { Component } from 'react'
import { sendVote } from '../actions/index'
import { connect } from 'react-redux'

class Vote extends Component {
    render() {
        const voteable = this.props.voteable
        return <span className="vote-area">
            <span className="voteable-meta">Vote count {voteable.voteScore}
                <button onClick={(e) => this.onVoteUp(voteable, e)}>up</button>
                <button onClick={(e) => this.onVoteDown(voteable, e)}>down</button>
            </span>
        </span>
    }

    onVoteUp = (voteable, e) => {
        e.preventDefault()
        console.log("vote up")
        this.props.vote(voteable, 'upVote', this.props.voteableType)
    }


    onVoteDown = (voteable, e) => {
        e.preventDefault()
        console.log("vote down")
        this.props.vote(voteable, 'downVote', this.props.voteableType)
    }
}

const mapStateToProps = (state, props) => ({ });

const mapDispatchToProps = (dispatch) => {
    return {
        vote: (voteable, voteString, voteableType) => dispatch(sendVote(voteable, voteString, voteableType))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote)