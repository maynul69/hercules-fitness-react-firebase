import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/Slider/slider1.jpg'
import slider2 from '../../../images/Slider/slider2.jpg'
import slider3 from '../../../images/Slider/slider3.jpg'

const Slider = () => {
    return (
      <div className='container mt-5'>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100"
              src={slider1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Enough Equipments</h3>
              <p>We have more than enough equipments for you to fulfill your needs</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100"
              src={slider2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Female Trainners For Female Clients</h3>
              <p>To take special care for our female clients and to make them feel comfortable , we have experiance female trainners</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100"
              src={slider3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Perfect Workout Environment</h3>
              <p>
                Here, you'll get perfect environment for you to workout. You can workout in men-woman combined session or 
                sessions specially for men and woman.
    
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Slider;