/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nuk-pro-react-footer"
                  target="_blank"
                >
                  Lil Data Monster
                </a>
              </li>
              <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nuk-pro-react-footer"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nuk-pro-react-footer"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            <a
              href="https://www.invisionapp.com?ref=creativetim"
              target="_blank"
            >
              Lil Data Monster
            </a>
            {" "} © {new Date().getFullYear()}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
