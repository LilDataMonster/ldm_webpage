import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components
const items = [
  /*
  {
    src: "url(" + require("../../assets/img/bg20.jpg") + ")",
    content: (
      <Row>
        <Col md="5">
          <div className="iframe-container">
            <iframe
              title="myIframe"
              allowFullScreen=""
              frameBorder="0"
              height="250"
              src="https://www.youtube.com/embed/rmfmdKOLzVI?rel=0&amp;controls=0&amp;showinfo=0"
            ></iframe>
          </div>
        </Col>
        <Col className="ml-auto mr-auto text-right" md="6">
          <h1 className="title">On the run tour.</h1>
          <h4 className="description">
            On the Run Tour: Beyoncé and Jay Z is a 2014 concert special which
            documents the September 12 and 13, 2014, shows of American singers
            {"'"}
            Beyoncé and Jay-Z joint co-headlining venture On the Run Tour.
          </h4>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  },*/
  {
    src: "url(" + require("../../assets/img/bg15.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">Lil Data Monster</h1>
          <h4 className="description">
            Collecting the littliest of data all across the land.
          </h4>
          <br></br>
          <h5>Connect with us on:</h5>
          <div className="buttons">
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="https://github.com/LilDataMonster"
              //onClick={e => e.preventDefault()}
            >
              <i className="fab fa-github"></i>
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  },/*
  {
    src: "url(" + require("../../assets/img/bg17.jpg") + ")",
    content: (
      <Row>
        <Col className="text-left" md="6">
          <h1 className="title">Arctic Sea ice.</h1>
          <h4 className="description">
            According to the National Oceanic and Atmospheric Administration,
            Ted Scambos, NSIDC lead scientist, puts the potentially record low
            maximum sea ice extent this year down to low ice extent in the
            Pacific and a late drop in ice extent in the Barents Sea.
          </h4>
          <br></br>
          <div className="buttons">
            <Button
              className="btn-neutral mr-1"
              color="info"
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <i className="now-ui-icons files_single-copy-04"></i> Read More..
            </Button>
            <Button
              color="info"
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <i className="now-ui-icons arrows-1_share-66"></i> Subscribe
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  }*/
];

function Headers() {
  // navbar collapses states and functions
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  // header carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      {navbarOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen(false);
          }}
        />
      ) : null}
      <div className="cd-section" id="headers">
        <div className="header-3">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen(!navbarOpen);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Lil Data Monster
                </NavbarBrand>
              </div>
              <Collapse navbar isOpen={navbarOpen}>
                <Nav className="ml-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="/" onClick={e => e.preventDefault()}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about" onClick={e => e.preventDefault()}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact" onClick={e => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map(item => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <div className="page-header header-filter">
                    <div
                      className="page-header-image"
                      style={{
                        backgroundImage: item.src
                      }}
                    ></div>
                    <div className="content">
                      <Container className="text-left">
                        {item.content}
                      </Container>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
            <a
              className="left carousel-control carousel-control-prev"
              data-slide="prev"
              href="#"
              onClick={e => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control carousel-control-next"
              data-slide="next"
              href="#"
              onClick={e => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-right" />
              <span className="sr-only">Next</span>
            </a>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Headers;
