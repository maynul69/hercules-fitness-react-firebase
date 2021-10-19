import Button from "@restart/ui/esm/Button";
import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./Motto.css";

const Motto = () => {
  return (
    <div className="my-5 container">
      <Container fluid >
        <Row>
          <Col className="left-side col-md-12 col-12 col-lg-6">
            <div className="left">
              <div className="text-center">
                <h1 className="my-2 headline-design text-center">
                  Our Motto and Goal
                </h1>
              </div>
              <div className="my-4">
                <Accordion>
                  <Accordion.Item eventKey="0" className="bg-dark text-light">
                    <Accordion.Header>Our Goal</Accordion.Header>
                    <Accordion.Body>
                      Our Goal is to make a Healthy Nation.We work to keep the
                      nation Healty and fit.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="bg-dark text-light">
                    <Accordion.Header>Our History</Accordion.Header>
                    <Accordion.Body>
                      We providing high quality health services since 2011. Our
                      Gym is locally owned and operated . We pride ourselves on
                      the level of involvement and commitment which we sustain
                      in each client relationship.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="bg-dark text-light">
                    <Accordion.Header>Our Mission</Accordion.Header>
                    <Accordion.Body>
                      Our Mission is to enhance the quality of health of the
                      clients by recognizing that each person is an individual
                      with unique needs and abilities and body types.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="text-center">
                <Button
                  href="/about-us"
                  className=" btn btn-primary fs-5 px-5"
                  variant="primary"
                >
                  Click for more details
                </Button>
              </div>
            </div>
          </Col>
          <Col className="right-side col-md-12 col-12 col-lg-6">
            <div className="text-center">
              <img
                className="w-100"
                src="https://image.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
                alt="img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Motto;
