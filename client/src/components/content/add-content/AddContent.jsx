import React, { useState } from "react";
import { Form, Modal, Button, Toast } from "react-bootstrap";

function AddContent({ show, handleClose, setProducts }) {
  const [username, setUsername] = useState("");
  const [experience, setExperience] = useState("");

  const restForm = () => {
    setUsername("");
    setExperience("");
  };

  const addNewContent = () => {
    if (!username) {
    } else if (!experience) {
    } else {
      setProducts((prevProduct) => {
        if (prevProduct.length > 0) {
          let id = Number(prevProduct[prevProduct.length - 1].id) + 1;
          restForm();
          handleClose();
          return [...prevProduct, { id: id, username, experience, level:Math.floor(experience/1000) }];
        } else {
          let id = 1;
          restForm();
          handleClose();

          return [...prevProduct, { id: id, username, experience, level:Math.floor(experience/1000) }];
        }
      });
    }
  };

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
                placeholder="John Doe"
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
                placeholder="12345"
                required
                value={experience}
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
            <Button variant="primary" type="submit" onClick={addNewContent}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddContent;