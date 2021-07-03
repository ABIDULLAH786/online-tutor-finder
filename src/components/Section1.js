import React from "react";
<<<<<<< HEAD
=======
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

>>>>>>> parent of 99f902a (Login signup and request page done)
import "../css/style.css";
export default function Section_1() {
    return (
<<<<<<< HEAD
        <div className="App Section1">
            <h1>Hello CodeSandbox</h1>
            <h2>Edit to see some magic happen!</h2>
=======
        <div className="App">
            <section className="inner-page-banner mb-5 whiteText">
                <h1>Findsss the right tutor for you</h1>
                <div className='container bg-primary w-75 rounded mt-5 '>
                    <Form className="pt-3">
                        <Row>
                            <Col><h3>I would like my lessons</h3></Col>
                        </Row>

                        <Row className="pt-3">
                            <Col md={{ span: 4, offset: 3 }}>
                                <Form.Group as={Row} controlId="formFirstName">
                                    <Col>
                                        <Form.Control placeholder="Course/Subject" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Button variant="success" type="submit" >
                                    Find
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
>>>>>>> parent of 99f902a (Login signup and request page done)
        </div>
    );
}
