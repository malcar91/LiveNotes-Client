import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import messages from '../AutoDismissAlert/messages'

import NotebookForm from '../../shared/notebookForm'
import Layout from '../../shared/layout'
// import Button from 'react-bootstrap/Button'

class NotebookCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notebook: {
        title: '',
        date: '',
        body: ''
      }
    }
  }

  handleInputChange = (event) => {
    event.persist()
    const notebookKey = event.target.name
    const value = event.target.value
    const updatedField = { [event.target.name]: event.target.value }
    const notebookCopy = Object.assign({}, this.state.notebook, updatedField)
    notebookCopy[notebookKey] = value
    this.setState({ notebook: notebookCopy })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { msgAlert } = this.props

    axios({
      method: 'POST',
      url: apiUrl + '/notebooks',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        notebook: this.state.notebook
      }
    })
      .then(res => {
        console.log(res)
        this.setState({
          notebook: {
            title: '',
            date: '',
            body: ''
          }
        })
      })
      .then(() => msgAlert({
        heading: 'Notebook created!',
        message: messages.notebookCreatedSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }

  render () {
    const { handleInputChange, handleSubmit } = this
    const { notebook } = this.state
    // const { title, date, body } = this.state
    // if (createdNotebookId) {
    //   return <Redirect to={`/notebooks/${createdNotebookId}`} />
    // }
    return (
      <Layout>
        <NotebookForm
          notebook={notebook}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </Layout>
    )
  }
}

export default NotebookCreate
