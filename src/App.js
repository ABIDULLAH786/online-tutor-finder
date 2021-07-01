import Header from "./components/header";
import Section2 from "./components/Section2";
import Footer from "./components/footer";
import React from "react";
import {Container} from "react-bootstrap";

import Section1 from "./components/Section1";
// import Form from "./components/form.js";
// import Login from "./components/login.js";

function App() {
  return (
    <>
        <Header />
        {/* <Form /> */}
        <Section1 />
      <Container>
        
        <Section2 />
      </ Container>

        <Footer />
     
    </>
  );
}

export default App;
