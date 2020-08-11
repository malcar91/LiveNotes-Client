import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Redirect } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
// import Layout from '../../shared/layout'

class NotebookIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notebooks: [],
      update: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/notebooks`)
      .then(res => this.setState({ notebooks: res.data.notebooks }))
      .catch(console.error)
  }

  notebookIndex = () => {
    axios({
      method: 'GET',
      url: apiUrl + '/notebooks',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => {
        this.setState({
          notebooks: res.data.notebooks
        })
        console.log(res.data.notebooks)
      })
      .catch(console.error)
  }

  // showNotebook = event => {
  //   axios({
  //     method: 'GET',
  //     url: apiUrl + '/notebooks' + this.state.notebook.id,
  //     headers: {
  //       'Authorization': `Bearer ${this.props.user.token}`
  //     }
  //   })
  //     .then(res => {
  //       return <Redirect to={'/notebooks/edit'} />
  //     })
  //     .catch(console.error)
  // }

  // updatePage = (clicked) => {
  //   if (clicked === true) {
  //     return <Redirect to={'/notebooks/edit'} />
  //   }
  // }

  deleteRow = (notebook) => {
    // event.preventDefault()
    // const id = this.state.notebook.id
    console.log(notebook)
    axios({
      method: 'DELETE',
      url: apiUrl + '/notebooks/' + notebook._id,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(() => this.notebookIndex())
      .catch(console.error)
  }

  updateHandler = (event) => this.setState({
    update: true
  })

  render () {
    // const { title, date, body } = this.state
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Body</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.notebooks.map(notebook => {
                return (
                  <tr key={notebook._id}>
                    <td>{notebook.title}</td>
                    <td>{notebook.date}</td>
                    <td>{notebook.body}</td>
                    <td><Button
                      onClick={() => this.deleteRow(notebook)}>Delete</Button></td>
                    <td>
                      <Button onClick={this.updateHandler} type='button'>Update</Button>
                      {this.state.update && <Redirect to={{
                        pathname: '/edit',
                        notebook: {
                          id: notebook._id,
                          title: notebook.title,
                          date: notebook.date,
                          body: notebook.body
                        }
                      }} /> }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <Button onClick={(event) => {
          event.preventDefault()
          this.notebookIndex()
        }}>Show Notebooks</Button>
      </div>
    )
  }
}

export default NotebookIndex
