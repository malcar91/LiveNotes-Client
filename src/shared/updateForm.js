import React from 'react'
// import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateForm = ({ notebook, handleSubmit, handleInputChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>

    <Form.Label>Title</Form.Label>
    <Form.Control
      placeholder="Title"
      type="text"
      name="title"
      onChange={handleInputChange}
    />

    <Form.Label>Date Created</Form.Label>
    <Form.Control
      placeholder="DD-MM-YYYY"
      type="date"
      name="date"
      onChange={handleInputChange}
    />

    <Form.Label>Body</Form.Label>
    <Form.Control
      placeholder="body"
      type="text"
      name="body"
      onChange={handleInputChange}
    />
    <br />
    <Button type="submit">Update</Button>
  </Form>
)

export default UpdateForm
