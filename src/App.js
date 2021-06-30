import Header from "./components/header";
import Form from "./components/form";
import Footer from "./components/footer";
import React from "react";
import {Container} from "react-bootstrap";
function App() {
  return (
    <>
        <Header />

      <Container>
        <Form />
      </ Container>

        <Footer />
     
    </>
  );
}

export default App;
