import { Form, Button } from 'react-bootstrap'

export default function Profile() {

    return (
        <>
            <h2>Update Profile</h2>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-5 mt-2">
                    <Form.Label >Your BIO</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-5">
                    <Form.Label >Your Availability:</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-5">
                    <Form.Label >Your Experience:</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <Form.Group controlId="formFirstName" className="mb-4">
                    <Form.Label>Native Language</Form.Label>
                    <Form.Control as="select" placeholder="Select Subject">
                        <option>English</option>
                        <option>Pashto</option>
                        <option>Sindhi</option>
                        <option>Urdu</option>
                        <option>Punjabi</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" className="offset-3 w-50" size="lg">Save</Button>
            </Form>
        </>
    );
}