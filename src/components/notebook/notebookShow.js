import React from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class NotebookShow extends React.Component {
  state = {
    notebook: null,
    deleted: false
  }

  componentDidMount () {
    const id = this.props.id
    axios.get(`${apiUrl}/notebooks/${id}`)

      .then(response => {
        this.setState({
          notebook: response.data.notebook
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteNotebook = () => {
    const id = this.props.id
    axios({
      method: 'DELETE',
      url: apiUrl + `notebooks/${id}`
    })
      .then(response => {
        this.setState({
          deleted: true
        })
      })
      .catch(console.error)
  }

  render () {
    if (this.state.deleted === true) {
      return <Redirect to='/books' />
    }

    let jsx
    if (this.state.notebook === null) {
      jsx = <p>Loading...</p>
    } else {
      jsx = (
        <div>
          <h3>{this.state.notebook.title}</h3>
          <p>{this.state.notebook.date}</p>
          <p>{this.state.notebook.body}</p>
          <button onClick={this.deleteNotebook}>Delete</button>
        </div>
      )
    }
    return (
      <div>
        {jsx}
      </div>
    )
  }
}
export default NotebookShow

// import React from 'react'
//
// export default class ShowPage extends React.Component {
//   render () {
//     const { note } = this.props
//
//     return (
//       <div>
//         <h1>{note.title}</h1>
//         <div>{note.body}</div>
//       </div>
//     )
//   }
// }
