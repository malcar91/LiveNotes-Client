import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import UpdateForm from '../../shared/updateForm'
import Layout from '../../shared/layout'

// import Button from 'react-bootstrap/Button'
// import Table from 'react-bootstrap/Table'

class NotebookEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notebook: {
        title: '',
        date: '',
        body: ''
      },
      updated: false
    }
  }

  // componentDidMount () {
  //   console.log(this.props, 'componentDidMount axios')
  //   axios({
  //     url: `${apiUrl}/notebooks/${this.props.noteProp.location.notebook.id}`,
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${this.props.user.token}`
  //     }
  //   })
  //     .then(res => this.setState({ notebook: res.data.notebook }))
  //     .catch(console.error)
  // }

  handleInputChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedNotebook = Object.assign(this.state.notebook, updatedField)
    this.setState({ notebook: editedNotebook })
  }

  handleSubmit = event => {
    event.preventDefault()

    // console.log(this.props, this.state, 'checking axios')
    axios({
      url: apiUrl + '/notebooks/' + this.props.noteProp.location.notebook.id,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        notebook: this.state.notebook
      }
    })
      .catch(console.error)
  }

  render () {
    const { notebook } = this.state
    const { handleInputChange, handleSubmit } = this

    // if (updated) {
    //   return <Redirect to={`/notebooks/${this.props.match.params.id}`} />
    // }

    return (
      <Layout>
        <UpdateForm
          notebook={notebook}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </Layout>
    )
  }
}
export default NotebookEdit

// import React, { Component } from 'react'
// // import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// // import messages from '../AutoDismissAlert/messages'
//
// import UpdateForm from '../../shared/updateForm'
// import Layout from '../../shared/layout'
//
// // import Button from 'react-bootstrap/Button'
// // import Table from 'react-bootstrap/Table'
//
// class NotebookEdit extends Component {
//   constructor (props) {
//     super(props)
//
//     this.state = {
//       notebook: {
//         title: '',
//         date: '',
//         body: ''
//       }
//     }
//   }
//
//   componentDidMount () {
//     console.log(this.props, 'componentDidMount axios')
//     axios(`${apiUrl}/notebooks/${this.state.notebook.id}`)
//       .then(res => this.setState({ notebook: res.data.notebook }))
//       .catch(console.error)
//   }
//
//   handleInputChange = (event) => {
//     const updatedField = { [event.target.name]: event.target.value }
//     const editedNotebook = Object.assign(this.state.notebook, updatedField)
//     this.setState({ notebook: editedNotebook })
//   }
//
//   handleSubmit = event => {
//     event.preventDefault()
//
//     // const { msgAlert } = this.props
//
//     // console.log(this.props, this.state, 'checking axios')
//     axios({
//       url: apiUrl + '/notebooks/' + this.state.notebook.id,
//       method: 'PATCH',
//       headers: {
//         'Authorization': `Bearer ${this.props.user.token}`
//       },
//       data: {
//         notebook: this.state.notebook
//       }
//     })
//       // .then(() => msgAlert({
//       //   heading: 'Notebook Updated',
//       //   message: messages.notebookUpdateSuccess,
//       //   variant: 'success'
//       // }))
//       .catch(console.error)
//       // .catch(error => {
//       //   this.setState({ title: '' })
//       //   msgAlert({
//       //     heading: 'Notebook Update Failed',
//       //     message: messages.notebookUpdateFailure,
//       //     variant: 'danger'
//       //   })
//       // })
//   }
//
//   render () {
//     const { notebook } = this.state
//     const { handleInputChange, handleSubmit } = this
//
//     // if (updated) {
//     //   return <Redirect to={`/notebooks/${this.props.match.params.id}`} />
//     // }
//     return (
//       <Layout>
//         <UpdateForm
//           notebook={notebook}
//           handleChange={handleInputChange}
//           handleSubmit={handleSubmit}
//         />
//       </Layout>
//     )
//   }
// }
// export default NotebookEdit
