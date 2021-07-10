import { Form, Button} from 'react-bootstrap'

export default function Profile() {

    return (
        <>
            <h2>Update Profile</h2>
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