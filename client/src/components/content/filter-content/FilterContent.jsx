import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function FilterContent({ setFilter, filter }) {
  return (
    <div className="mt-3">
      <Card>
        <Card.Header>Filter Product List</Card.Header>
        <Card.Body>
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search By Username"
                    onChange={(e) => {
                      setFilter({ ...filter, username: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Search By Username
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder="Search By Experience"
                    onChange={(e) => {
                      setFilter({ ...filter, experience: e.target.value });
                    }}
                  />
                  <Form.Text className="text-muted">
                    Search By Experience
                  </Form.Text>
                </Form.Group>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FilterContent;