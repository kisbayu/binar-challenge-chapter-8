import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

function EditContent({
  show,
  handleClose,
  username,
  price,
  setUsername,
  setExperience,
  editProduct,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Product Name"
                autoFocus
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insert Product Price"
                required
                value={price}
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={editProduct}>
              Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditContent;