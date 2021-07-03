import Header from "./components/header";
<<<<<<< HEAD
import Form from "./components/form";
import Footer from "./components/footer";
import React from "react";
import {Container} from "react-bootstrap";
=======
import Section2 from "./components/Section2";
import Footer from "./components/footer";
import React from "react";
import {Container} from "react-bootstrap";

import Section1 from "./components/Section1";
// import Form from "./components/form.js";
// import Login from "./components/login.js";

>>>>>>> parent of 99f902a (Login signup and request page done)
function App() {
  return (
    <>
        <Header />
<<<<<<< HEAD

      <Container>
        <Form />
=======
        {/* <Form /> */}
        <Section1 />
      <Container>
        
        <Section2 />
>>>>>>> parent of 99f902a (Login signup and request page done)
      </ Container>

        <Footer />
     
    </>
  );
}

export default App;
