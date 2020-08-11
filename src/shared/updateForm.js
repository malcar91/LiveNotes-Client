import React from 'react'
// import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NotebookForm = ({ notebook, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control required
        onChange={handleChange}
        value={notebook.title}
        type='text'
        name='title'
        placeholder="Notebook Title"/>
    </Form.Group>

    <Form.Group>
      <Form.Label>Date</Form.Label>
      <Form.Control required
        onChange={handleChange}
        value={notebook.date}
        type='date'
        name="date"
        placeholder="Today's Date"/>
    </Form.Group>

    <Form.Group>
      <Form.Label>Body</Form.Label>
      <Form.Control required
        onChange={handleChange}
        value= {notebook.body}
        name="body"
        as="textarea"
        placeholder="Enter Your Notes"/>
    </Form.Group>
    <Button type="submit">Update Book</Button >
  </Form>
)
// <Link to={cancelPath}>
//   <Button>Cancel</Button>
// </Link>
export default NotebookForm
