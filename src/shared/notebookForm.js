import React from 'react'
// import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NotebookForm = ({ notebook, handleSubmit, handleInputChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>

    <Form.Label>Title</Form.Label>
    <Form.Control
      placeholder="Title"
      value={notebook.title}
      name="title"
      onChange={handleInputChange}
    />

    <Form.Label>Date Created</Form.Label>
    <Form.Control
      placeholder="DD-MM-YYYY"
      value={notebook.date}
      type="date"
      name="date"
      onChange={handleInputChange}
    />

    <Form.Label>Description</Form.Label>
    <Form.Control
      placeholder="Description"
      value={notebook.body}
      name="body"
      onChange={handleInputChange}
    />
    <br />
    <Button type="submit">Create</Button>
  </Form>
)

export default NotebookForm
