import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React from "react";
import "../css/style.css";

export default class MyForm extends React.Component {
  render() {
    return (
      <>
        {/* <Container className="block-example border border-dark"> */}
        <Form className="offset-3 mt-5 mb-5 col-md-6 block-example border border-dark p-4 rounded  ">
          <Form.Group as={Row} controlId="formFirstName">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col>
              <Form.Control placeholder="First Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formLastName">
            <Form.Label column md="3">
              Last name
            </Form.Label>
            <Col>
              <Form.Control placeholder="Last Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formEmail">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <Col>
              <Form.Control placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPassword">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPhone">
            <Form.Label column md="3">
              Phone Number
            </Form.Label>
            <Col>
              <Form.Control placeholder="+923XXXXXXXXX" />
            </Col>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Address</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Select Status</Form.Label>
              <Form.Control as="select" placeholder="Select Subject">
                <option>Status</option>
                <option>Student</option>
                <option>Tutor</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* </Container> */};
      </>
    );
  }
}
