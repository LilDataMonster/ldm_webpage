import React from "react";
import { Link } from "gatsby"
//import { Link } from "react-router-dom";
// reactstrap components
import {
  //Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  //NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ScrollTransparentNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(" navbar-transparent");
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          tabIndex={0}
          role="button"
          id="bodyClick"
          onKeyDown={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              LDM · Lil Data Monster
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Lil Data Monster
            </UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>Button 0</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons design_image"></i>
                    Stuff
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>Sections</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    Features
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons text_align-left"></i>
                    Blogs
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons sport_user-run"></i>
                    Teams
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons education_paper"></i>
                    Projects
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons ui-2_chat-round"></i>
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons tech_mobile"></i>
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
