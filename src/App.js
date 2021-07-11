import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/footer";
import React from "react";

import Home from "./pages/home";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import Signup2 from "./pages/registration.js";
import Request from "./pages/request.js";
import TutorDashboard from "./TutuorDashboard/TutorDashboard.js";
import TutorProfile from "./TutuorDashboard/TutorProfile";
import TutorAccount from "./TutuorDashboard/TutorAccount";
import TutorSubjects from "./TutuorDashboard/TutorSubjects";

import StdDashboard from "./StudentDashboard/StdDashboard.js";
import StdProfile from "./StudentDashboard/StdProfile";
import StdAccount from "./StudentDashboard/StdAccount";
import StdSubjects from "./StudentDashboard/StdSubjects";

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
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/signup" component={Signup2} /> */}
       
        <Route exact path="/t/home" component={TutorDashboard} />
        <Route exact path="/t/edit-profile" component={TutorProfile} />
        <Route exact path="/t/account-info" component={TutorAccount} />
        <Route exact path="/t/my-subjects" component={TutorSubjects} />

        <Route exact path="/s/home" component={StdDashboard} />
        <Route exact path="/s/edit-profile" component={StdProfile} />
        <Route exact path="/s/account-info" component={StdAccount} />
        <Route exact path="/s/my-subjects" component={StdSubjects} />



      </Switch>
    </>
  );
}

export default App;
