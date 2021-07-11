import React from "react";
import { Container, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Section2() {
    return (
        <>
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>Learn online with TutorFinder</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 8, offset: 2 }}>
                        <img
                            alt="logo"
                            src={"https://www.tutorfinder.co.uk/assets/images/vclaptop.png"}
                            className="d-inline-block align-center"
                        />
                    </Col>
                </Row>
                <Button variant="success" type="submit" size="lg" className="w-100" >
                    <Link to="/s/home" >
                        Dashboard
                    </Link>
                </Button>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 4 }}>
                        <Card className="text-center">
                            <i class="bi bi-camera-reels-fill" style={{ fontSize: 100 }}></i>

                            {/* <Card.Img  src="https://www.tutorfinder.co.uk/assets/images/learning.png" /> */}
                            <Card.Body>
                                <Card.Title> Online lessons </Card.Title>
                                <Card.Text>
                                    All the lesson delivered by online tutors by using advanced virtual classroom.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <Card className="text-center">
                            <i class="bi bi-people-fill" style={{ fontSize: 100 }}></i>
                            <Card.Body>
                                <Card.Title> 1:1 learning </Card.Title>
                                <Card.Text>
                                    See and speak with your tutor through the webcam, regardless of your location.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <Card className="text-center">
                            <i class="bi bi-share-fill" style={{ fontSize: 100 }}></i>
                            <Card.Body>
                                <Card.Title> Sharing documents </Card.Title>
                                <Card.Text>
                                    Share documents and screen to each other in the real time.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
}