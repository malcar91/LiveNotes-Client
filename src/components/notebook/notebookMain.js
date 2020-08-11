// import React, { Component } from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
//
// import IndexPage from './notebookIndex'
// import ShowPage from './notebookShow'
// import NewPage from './notebookNew'
//
// class Notebooks extends Component {
//   state = {
//     notes: {
//       1: {
//         _id: 1,
//         title: 'Hello',
//         body: 'The body',
//         updatedAt: new Date()
//       }
//     }
//   }
//
//   handleSave = (note) => {
//     const ids = Object.keys(this.state.notes)
//     const id = Math.max(...ids) + 1
//
//     note['_id'] = id
//
//     const { notes } = this.state
//
//     this.setState({
//       notes: {
//         ...notes,
//         [id]: note
//       }
//     })
//   }
//
//   render () {
//     return (
//       <BrowserRouter>
//         <div>
//           <Route exact path="/notebooks" component={(props) => <IndexPage {...props} notes={this.state.notes} /> } />
//           <Route exact path="/notebooks/:id" component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} />} />
//           <Route exact path="/" component={(props) => <NewPage {...props} onSave={this.handleSave} />} />
//         </div>
//       </BrowserRouter>
//     )
//   }
// }
//
// export default Notebooks
