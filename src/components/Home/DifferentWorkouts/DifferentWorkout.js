import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const DifferentWorkout = () => {
    return (
      <div className="my-5">
        <Container>
          <div className="text-center">
            <h1 className="my-2 headline-design text-center">Workout Types</h1>
          </div>
          <CardGroup className="my-4">
            <Card className="mx-2 border-0 card-design bg-dark text-light p-2">
              <Card.Img
                variant="top"
                src="https://image.freepik.com/free-photo/young-women-yoga-indoors-keep-calm-meditates-while-practicing-yoga-explore-inner-peace-yoga-meditation-have-good-benefits-health-photo-concept-yoga-sport-healthy-lifestyle_1253-1052.jpg"
              />
              <Card.Body>
                <Card.Title className="title">Yoga</Card.Title>
                <Card.Text>
                  Yoga is a group of physical, mental, and spiritual practices
                  or disciplines that originated in ancient India, aimed at
                  controlling and stilling the mind...
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light p-2">
              <Card.Img
                variant="top"
                src="https://image.freepik.com/free-photo/focus-man-working-arms_329181-14131.jpg"
              />
              <Card.Body>
                <Card.Title className="title">WeighLifting</Card.Title>
                <Card.Text>
                  What are benefits of weightlifting? Image result for
                  weightlifting Weight lifting isn't just about bulking up and
                  building muscle mass ...
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light p-2">
              <Card.Img
                variant="top"
                src="https://image.freepik.com/free-photo/outdoor-shot-active-dark-skinned-man-running-morning-has-regular-trainings-dressed-tracksuit-comfortable-sneakers-concentrated-into-distance-sees-finish-far-away_273609-29401.jpg"
              />
              <Card.Body>
                <Card.Title className="title">Freehand Exercise</Card.Title>
                <Card.Text>
                  What are the benefits of free hand exercise? It is an exercise
                  that, besides toning your leg muscles, improves your stamina
                  without putting much pressure on joints...
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
};

export default DifferentWorkout;