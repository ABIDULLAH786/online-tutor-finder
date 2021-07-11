import React from "react";
import { Form } from "react-bootstrap";
// import { Select } from "react-bootstrap/Select";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FloatingLabel } from "react-bootstrap";
// import FloatingLabel from "react-bootstrap-floating-label";
import "../css/style.css";
export default function Section1() {
    return (
        <div className="App">
            <section className="inner-page-banner mb-5 whiteText">
                <h1>Findsss the right tutor for you</h1>


                <div className='container bg-primary w-75 rounded mt-5 '>
                    <Form className="pt-3 pb-4">
                        <Row>
                            <Col><h3>I would like my lessons</h3></Col>
                        </Row>

                        <Row className="pt-3">
                            <Col md={{ span: 4, offset: 3 }}>
                                <Form.Group>
                                    <Form.Control as="select" size="lg" placeholder="Select Subject">
                                        <option>Web Engineering</option>
                                        <option>OS</option>
                                        <option>Back-End </option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Button variant="success" type="submit" size="lg" >
                                <Link to="/">    Find </Link>
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
        </div>
    );
}
