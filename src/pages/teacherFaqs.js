import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Header from "../components/header";
import Footer from "../components/footer";

import React from "react";
import "../css/style.css";

export default class MyForm extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Container className="mt-5 w-75 mb-5 " >
                    
                </Container>
                <Footer />
            </>
        );
    }
}
