import React from "react";
// https://gist.github.com/Luke-zhang-04/7cb523899ca4044f805f0d0909e4c5c1
import { Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../css/style.css";
import { Link } from "react-router-dom";

class Foot extends React.Component {
  render() {
    return (
      <>
        <footer className="page-footer font-small blue pt-4 bg-dark footerText">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-4 mt-md-0 mt-3 pl-5">
                <span className="center">
                  <h5 className="text-uppercase">Stay Connected</h5>
                  <Button variant="info">Contect Us</Button>
                  <br />
                  <br />
                  <div>
                    {/* style={{ height: 25, width: 25 }} */}
                    <SocialIcon
                      className="mr-2"
                      url="https://linkedin.com/in/jaketrent"
                      style={{ height: 30, width: 30 }}
                    />
                    <SocialIcon
                      className="mr-2"
                      url="https://facebook.com/in/jaketrent"
                      style={{ height: 30, width: 30 }}
                    />
                    <SocialIcon
                      className="mr-2"
                      url="https://twitter.com/in/jaketrent"
                      style={{ height: 30, width: 30 }}
                    />
                    <SocialIcon
                      url="https://github.com/in/jaketrent"
                      style={{ height: 30, width: 30 }}
                      bgColor="#ff5a01"
                    />
                  </div>
                </span>
              </div>

              <hr className="clearfix w-100 d-md-none pb-0" />

              <div className="col-md-3 offset-1 mb-md-0 mb-3">
                <h5 className="text-uppercase">Tutors</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/become-a-tutor">Become a Tutor</Link>
                  </li>
                  {/* <li>
                    <a href="#!">Online Tutoring Jobs</a>
                  </li> */}
                  <li>
                    <Link to="/tutor-faqs">Tutor FAQs</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 offset-1 mb-md-0 mb-3">
                <h5 className="text-uppercase ">Students</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to={"/registration"}>Student Signup</Link>
                  </li>
                  <li>
                    <Link to="/student-faqs">Student FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2020 Copyright: Web Semester Project BSCS-VI
          </div>
        </footer>
      </>
    );
  }
}

export default Foot;
