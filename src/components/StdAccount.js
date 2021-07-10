import { Form, Button, Col } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap-floating-label";

// import MyForm from "../pages/registration";
export default function Account() {

    return (
        <>
            {/* <FloatingLabel />
            <FloatingLabel label="Name: " /> */}
            <h2>Your Persinal Info</h2>

            <Form className="mt-4 mb-4">
                <Form.Row >
                    <Form.Group as={Col} controlId="formFirstName" className="mb-4">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName" className="mb-4">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formEmail" className="mb-4">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPassword" className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formPhone" className="mb-4">
                        <Form.Label>Phone</Form.Label>

                        <Form.Control placeholder="+923XXXXXXXXX" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="textarea" />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" placeholder="Select Subject">
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Account Type</Form.Label>
                        <Form.Control as="select" placeholder="Select Subject">
                            <option>Select Account Type </option>
                            <option>Student</option>
                            <option>Tutor</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" className="offset-3 w-50">
                    Submit
                </Button>
            </Form>
            <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-5 mt-2">
                <Form.Label >Comment About Tution You Are Looking For:</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-5">
                <Form.Label >Your Availability:</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <Button variant="primary" className="offset-3 w-50" size="lg">Save</Button>
        </>
    );
}