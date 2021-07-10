import { Card, Button } from 'react-bootstrap'
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

export default function Subject() {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>My Subjects <Icon style={{ color: green[500] }}>add_circle</Icon> </Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}