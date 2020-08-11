// // not sure if i am going to need this
// import React, { Component } from 'react'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// import Container from 'react-bootstrap/Container'
// import { Row, Col } from 'react-simple-flex-grid'
// import 'react-simple-flex-grid/lib/main.css'
//
// // import Notebook from './notebook.js'
//
// class Notebooks extends Component {
//   state = {
//     notebooks: null
//   }
//   componentDidMount () {
//     axios(`${apiUrl}/notebooks`)
//       .then(res => this.setState({ notebooks: res.data.notebooks }))
//       .catch(error => {
//         console.log(error)
//       })
//   }
//   render () {
//     let jsx
//     if (this.state.notebooks === null) {
//       jsx = <p>Loading ...</p>
//     } else if (this.state.notebooks.length === 0) {
//       jsx = <p>No Notebooks</p>
//     } else {
//       jsx = (
//         <Container>
//           <Row>
//             {this.state.notebooks.map(notebook => {
//               return (
//                 <Col key={notebook._id}>
//                   <p>{notebook.title}</p>
//                   <p>{notebook.date}</p>
//                   <p>{notebook.body}</p>
//                 </Col>
//               )
//             })}
//           </Row>
//         </Container>
//       )
//     }
//     return (
//       <div>{jsx}</div>
//     )
//   }
// }
// const Notebooks = props => {
//   const { title, date, body } = this.state
//   return (
//     <div>
//       <h2>Your Notebooks</h2>
//       <Container>
//         <Row>
//           {
//             Notebook.map((index) => {
//               return <Col key=''>
//                 <p>{title}</p>
//                 <p>{date}</p>
//               </Col>
//             })
//           }
//         </Row>
//         <Row>
//           {
//             Notebook.map((index) => {
//               return <Col key=''>
//                 <p>{body}</p>
//               </Col>
//             })
//           }
//         </Row>
//       </Container>
//     </div>
//   )
// }

// function NotebookList (props) {
//   const notebooks = Notebook
//   const notebookList = notebooks.map(notebook => {
//     return <div className="list" key={notebook.key}>
//       <Container>
//         <Row>
//           <Col>
//             <p>{notebookList.title}</p>
//             <p>{notebookList.date}</p>
//             <p>{notebookList.body}</p>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   })
//
// export default Notebooks
