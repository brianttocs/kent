import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class Slider extends Component {
  render() {
    return (
      <Carousel className="px-5 pt-5" >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider/horse-3168576_1280.jpg"
            style={{ height: '40rem' }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="display-4 text-dark bg-light" style={{ opacity: '0.8' }}>First slide label</h1>
            <h3 className="text-dark bg-light" style={{ opacity: '0.8' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
            <button type="button" className="btn btn-outline-light btn-lg">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider/seaside-1031450_1280.jpg"
            style={{ height: '40rem' }}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="display-4 text-dark bg-light" style={{ opacity: '0.8' }}>Second slide label</h1>
            <h3 className="text-dark bg-light" style={{ opacity: '0.8' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <button type="button" className="btn btn-outline-light btn-lg">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider/horse-4475581_1280.jpg"
            style={{ height: '40rem' }}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="display-4 text-dark bg-light" style={{ opacity: '0.8' }}>Third slide label</h1>
            <h3 className="text-dark bg-light" style={{ opacity: '0.8' }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
            <button type="button" className="btn btn-outline-dark btn-lg">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider/sunset-1722437_1280.jpg"
            style={{ height: '40rem' }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="display-4 text-dark bg-light" style={{ opacity: '0.8' }}>Fourth slide label</h1>
            <h3 className="text-dark bg-light" style={{ opacity: '0.8' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
            <button type="button" className="btn btn-outline-light btn-lg">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
