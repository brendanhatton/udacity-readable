import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { closePostModal, createPost, updatePost } from '../actions/index'

class PostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            title: '',
            body: '',
            category: props.category
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.createPost = this.createPost.bind(this)
        this.closePostModal = this.closePostModal.bind(this)
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
            title: '',
            body: '',
            category: this.props.category

        })
    }

    createPost(e) {
        e.preventDefault()
        this.resetState()
        this.props.addOrEditPost({ post: this.props.post, title: this.state.title, owner: this.state.owner, body: this.state.body, category: this.state.category })
    }

    closePostModal() {
        this.resetState()
        this.props.closePostModal()
    }

    onOpen() {
        if (this.props.post && this.props.post.id) {
            this.setState({
                owner: this.props.post.author,
                body: this.props.post.body
            })
        } else {
            this.resetState()
        }
    }

    render() {
        let title = this.props.post && this.props.post.id ? 'Update Post' : 'Add Post'
        return <Modal
            className='modal'
            overlayClassName='overlay'
            isOpen={this.props.postModalOpen}
            onAfterOpen={this.onOpen}
            onRequestClose={this.closePostModal}
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
                            className='post-author'
                            type='text'
                            placeholder='author'
                            value={this.state.owner}
                            onChange={this.handleInputChange}
                        />
                    </p>
                    <p>
                        <input
                            size="50"
                            name="title"
                            className='post-title'
                            type='text'
                            placeholder='title'
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                    </p>
                    <p>
                        <textarea
                            cols="70"
                            rows="10"
                            maxLength="1000"
                            name="body"
                            className='post-body'
                            placeholder='Enter post text...'
                            value={this.state.body}
                            onChange={this.handleInputChange}
                        />
                    </p>

                    <button
                        onClick={(e) => this.createPost(e)}>
                        {title}
                    </button>
                </div>
            </div>
        </Modal>
    }
}

const mapStateToProps = (state, props) => ({
    postModalOpen: state.postModalOpen.open,
    post: state.postModalOpen.post
})

const mapDispatchToProps = (dispatch) => {
    return {
        closePostModal: () => dispatch(closePostModal()),
        addOrEditPost: (post) => {
            post.id ?
                dispatch(updatePost(post))
                :
                dispatch(createPost(post))

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostModal)