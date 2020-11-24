import React, { Component } from 'react'

export default class Formulaire extends Component {

    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props

        const message = {
            pseudo: pseudo,
            message: this.state.message
        }

        addMessage(message)

        // Reset

        this.setState({ message: '', length})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createMessage()
    }

    handleChange = (e) => {
        const message = e.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    handleKeyUp = (e) => {
        if(e.key === 'Enter'){
            this.createMessage()
        }
    }

    render() {
        return (
            <form 
            className="form"
            onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    required
                    maxLength='140' />
                <div className="info">
                    {this.state.length}
                </div>
                <button type="submit">
                    Envoyer!
                </button>
            </form>
        )
    }
}
