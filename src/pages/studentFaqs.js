import { Container, Collapse, Button, CardBody, Card } from "react-bootstrap";
// https://reactstrap.github.io/components/collapse/
// import { Card } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { useContext, useState } from "react";

import "../css/style.css";

export default class MyForm extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container className="mt-5 w-50 mb-5">
          <p>
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Button with data-bs-target
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};
