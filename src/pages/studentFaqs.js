import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { useContext} from "react";
import "../css/style.css";

export default class MyForm extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Container className="mt-5 w-50 mb-5" >
                </Container>
                <Footer />
            </>
        );
    }
}
