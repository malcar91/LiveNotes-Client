import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../../shared/layout'

import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

class Notebook extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notebook: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/notebooks/${this.props.match.params.id}`)
      .then(res => this.setState({ notebook: res.data.notebook }))
      .catch(console.error)
  }

  deleteRow = () => {
    axios({
      url: `${apiUrl}/notebooks/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { notebook, deleted } = this.state

    if (!notebook) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={'/notebooks/:id/edit'} />
    }

    return (
      <Layout>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Date</th>
                <th>Body</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{notebook._id}</td>
                <td>{notebook.title}</td>
                <td>{notebook.date}</td>
                <td>{notebook.body}</td>
                <td><Button onClick={this.deleteRow}>Delete</Button></td>
                <td>
                  <Link to={`/notebooks/${this.props.match.params.id}/edit`}>
                    <Button>Edit</Button>
                  </Link>
                  <Link to="/notebooks">Back to notebooks</Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Layout>
    )
  }
}

export default Notebook
