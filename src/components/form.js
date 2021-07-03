import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import React from "react";

export default class MyForm extends React.Component {
<<<<<<< HEAD
  render() {
    return (
      <>
        <Form>
          <Form.Row>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
=======
    render() {
        return (
            <>
                <Form className="offset-3 col-md-6 ">
                    <h1 className="textCenter">Register Your Selfe</h1>
                    <Form.Group as={Row} controlId="formFirstName">
                        <Form.Label column md="3">
                            First Name
                        </Form.Label>
                        <Col>
                            <Form.Control placeholder="First Name" />
                        </Col>
                    </Form.Group>
>>>>>>> parent of 99f902a (Login signup and request page done)

            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

<<<<<<< HEAD
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        ;
      </>
    );
  }
=======
                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                ;
            </>
        );
    }
>>>>>>> parent of 99f902a (Login signup and request page done)
}
