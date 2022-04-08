import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  Accordion,
  Carousel,
  Tabs,
  Tab,
  Sonnet,
} from "react-bootstrap";
import "./home.css";
import video from "./../img/Sanoq sonlar.  Bolalar uchun darsliklar. Ziyrakbola.mp4";
import rasim from "./../img/programming.jpg";
class Home extends Component {
  state = {
    count: 0,
    text: "",
  };

  render() {
    const handleClick = () => {
      this.setState({
        count: this.state.count + 2,
      });
    };
    const handleClickminus = () => {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1,
        });
      }
    };

    const handleReset = () => {
      this.setState({
        count: 0,
      });
    };

    const handleInput = (e) => {
      this.setState({
        text: e.target.value,
      });
    };

    const { count, text } = this.state;
    return (
      <div className="">
        <p className="text-center ">Hello Homejs</p>
        <InputGroup className="mb-3">
          <InputGroup.Text>First and last name</InputGroup.Text>
          <FormControl aria-label="First name" />
          <FormControl aria-label="Last name" />
        </InputGroup>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card p-4">
                <h2 className="text-center">count {count}</h2>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={handleClickminus}>
                    -
                  </button>
                  <button className="btn btn-secondary" onClick={handleReset}>
                    Reset
                  </button>
                  <button className="btn btn-success" onClick={handleClick}>
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card p-4">
                <input
                  type="text"
                  onKeyUp={handleInput}
                  className="form-control"
                />
                <p>Uzunligi: {text.length}</p>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <Card>
                <CardImg src={rasim} />
              </Card>
            </Col>
            <Col>
              <Card>
                <video width="400px" controls>
                  <source src={video} />
                </video>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rasim}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rasim}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rasim}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
