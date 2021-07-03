import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";

import React from "react";
import "../css/style.css";

export default class MyForm extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Container className="mt-5 w-50 mb-5" >
                    <Form>
                        <Form.Group>
                            <Form.Control as="select" size="lg" placeholder="Select Subject">
                                <option>Web Engineering</option>
                                <option>OS</option>
                                <option>Back-End Development</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <div className="w-100">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>

                    </Form>
                </Container>
                <Footer />
            </>
        );
    }
}
