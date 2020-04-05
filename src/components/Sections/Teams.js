import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Teams() {
  return (
    <>
      <div className="cd-section" id="teams">
        <div
          className="team-2"
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Meet the Team</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("../../assets/img/olivia.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h3">Natalie Paisley</CardTitle>
                    <h6 className="category text-info">Credit Analyst</h6>
                    <p className="card-description">
                      Let us be grateful to people who make us happy, they are
                      the charming gardeners who make our souls blossom...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("../../assets/img/james.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Anthony Jackson</CardTitle>
                    <h6 className="category text-info">Desktop Publisher</h6>
                    <p className="card-description">
                      Let us be grateful to people who make us happy, they are
                      the charming gardeners who make our souls blossom...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("../../assets/img/emily.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Bella Audrey</CardTitle>
                    <h6 className="category text-info">Economist</h6>
                    <p className="card-description">
                      Let us be grateful to people who make us happy, they are
                      the charming gardeners who make our souls blossom...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-pinterest"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Teams;
