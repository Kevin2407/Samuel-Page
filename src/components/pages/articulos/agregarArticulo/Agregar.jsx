import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Agregar extends Component {
  render() {
    return (
      <div>
        <Form>
            <Form.Group>
                <Form.Label>Titulo del articulo</Form.Label>
                <Form.Control type="text" placeholder="Titulo" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contenido del articulo</Form.Label>
                <Form.Control as="textarea" />
            </Form.Group>
            <Button className="miBoton agregar-btn" type="submit">Agregar</Button>
        </Form>
      </div>
    )
  }
}
