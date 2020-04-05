/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function FooterDefault() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="/"
                >
                  Lil Data Monster
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            <a
              href="/"
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

export default FooterDefault;
