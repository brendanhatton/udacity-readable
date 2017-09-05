import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { closeCommentModal, createComment, updateComment } from '../actions/index'

class CommentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            body: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.createComment = this.createComment.bind(this)
        this.closeCommentModal = this.closeCommentModal.bind(this)
        this.onOpen = this.onOpen.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    resetState() {
        this.setState({
            owner: '',
            body: ''
        })
    }

    createComment(e) {
        e.preventDefault()
        this.resetState()
        this.props.addOrEditComment({ post: this.props.post, owner: this.state.owner, body: this.state.body, id: this.props.comment.id })
    }

    closeCommentModal() {
        this.resetState()
        this.props.closeCommentModal()
    }

    onOpen() {
        if (this.props.comment && this.props.comment.id) {
            this.setState({
                owner: this.props.comment.author,
                body: this.props.comment.body
            })
        } else {
            this.resetState()
        }
    }

    render() {
        let title = this.props.comment && this.props.comment.id ? 'Update Comment' : 'Add Comment'
        return <Modal
            className='modal'
            overlayClassName='overlay'
            isOpen={this.props.commentModalOpen}
            onAfterOpen={this.onOpen}
            onRequestClose={this.closeCommentModal}
            contentLabel='Modal'
        >
            <div className='container'>
                <h3 className='subheader'>
                    {title}
                </h3>
                <div className='search'>
                    <p>
                        <input
                            size="50"
                            name="owner"
                            className='comment-author'
                            type='text'
                            placeholder='author'
                            value={this.state.owner}
                            onChange={this.handleInputChange}
                        />
                    </p>
                    <p>
                        <textarea
                            cols="70"
                            rows="10"
                            maxLength="1000"
                            name="body"
                            className='comment-body'
                            placeholder='title'
                            value={this.state.body}
                            onChange={this.handleInputChange}
                        />
                    </p>

                    <button
                        onClick={(e) => this.createComment(e)}>
                        {title}
                    </button>
                </div>
            </div>
        </Modal>
    }
}

const mapStateToProps = (state, props) => ({
    commentModalOpen: state.commentModalOpen.open,
    comment: state.commentModalOpen.comment
})

const mapDispatchToProps = (dispatch) => {
    return {
        closeCommentModal: () => dispatch(closeCommentModal()),
        addOrEditComment: (comment) => {
            comment.id ?
                dispatch(updateComment(comment))
                :
                dispatch(createComment(comment))

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentModal)