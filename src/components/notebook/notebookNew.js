// import React from 'react'
// import { Link } from 'react-router-dom'
//
// export default class NewPage extends React.Component {
//   state = {
//     note: {
//       title: '',
//       body: '',
//       createdAt: undefined,
//       updatedAt: undefined
//     }
//   }
//
//   updateValue = (e) => {
//     const { note } = this.state
//
//     this.setState({
//       note: { ...note, [e.target.name]: e.target.value }
//     })
//   }
//
//   handleSave = (e) => {
//     e.preventDefault()
//
//     const id = this.props.onSave(this.state.note)
//     this.props.history.replace(`/notes/${id}`)
//   }
//
//   render () {
//     const { note } = this.props
//
//     return (
//       <div>
//         <h1>New Note</h1>
//         <form onSubimt={this.handleSave}>
//           <div>
//             <label>Title</label>
//             <input type="text" name="title" value={note.title} onChange={this.updateValue} />
//           </div>
//           <div>
//             <textarea name="body" value={note.body} onChange={this.updateValue} />
//           </div>
//           <div>
//             <button>Save</button>
//             <Link to="/">Cancel</Link>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
