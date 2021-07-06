import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/footer";
import React from "react";

import Home from "./pages/home";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import Request from "./pages/request.js";
import StudentFaqs from "./pages/studentFaqs.js";
import TeacherFaqs from "./pages/teacherFaqs.js";
import Dashboard from "./dashboard/Dashboard.js";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/section1" component={Section1} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/section2" component={Section2} />
        <Route exact path="/request-a-tutor" component={Request} />
        <Route exact path="/become-a-tutor" component={Signup} />
        <Route exact path="/registration" component={Signup} />
        <Route exact path="/student-faqs" component={StudentFaqs} />
        <Route exact path="/tutor-faqs" component={TeacherFaqs} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
