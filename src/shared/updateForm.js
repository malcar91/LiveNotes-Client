import React from 'react'
// import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

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

    <Form.Label>Description</Form.Label>
    <Form.Control
      placeholder="Description"
      type="text"
      name="body"
      onChange={handleInputChange}
    />
    <br />
    <ReactQuill theme="snow" />

    <br />
    <Button type="submit">Update</Button>
  </Form>
)

export default UpdateForm
